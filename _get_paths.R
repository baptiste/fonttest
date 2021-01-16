# setwd("~/Documents/github/sansserrure/paths/")

library(xml2)

lf <- list.files(pattern = '.svg', recursive = TRUE)
names(lf) <- gsub('.svg','',lf)

codify <- function(code = '1D43A'){
  message(code)
  
  a <- xml2::read_xml(glue::glue('{code}.svg'))
  
  # get second g (third element)
  g2 <- as_list(xml_contents(xml_children(a)[3]))
  paths <- vapply(g2, attr,'a', "d") # extract paths
  
  # strip M from first path
  paths[1] <- gsub('M ','',paths[1])
  d <- paste(paths, collapse=' ')
  
  list(code=glue::glue("0x{code}"),
       box = c(.75, 0.0, 0.55), 
       p =  glue::glue("@d@-",.open = '@', .close= '@'))
}

all <- lapply(names(lf), codify)
saveRDS(all, file='glyphs.rds')
jsonlite::write_json(all, path = 'glyphs.json',
                     pretty = TRUE, auto_unbox = TRUE)

library(glue)

as_string <- function(el){
  glue("@el$code@ : [@el$box[1]@,@el$box[2]@,@el$box[3]@, {p: '@el$p@'}]", .open='@',.close='@')
}

cat(glue_collapse(lapply(all, as_string), sep=',\n', last=''))

