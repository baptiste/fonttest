//
//  These define the paths for the characters in the different mathvariants
//    The data is [height, depth, width, {p: path-without-initial-M}]
//    The metrics are in em's, and the coordinates of the path are 1000th of an em
//    Ending the path with a '-' marks it as a stroke glyph (it will be 
//      removed before used).
//    Paths can extend outside of the bounding box, especially for 
//      italic fonts, and usually have a little space on the left and right
//      to give space between characters.  (The space on the left is the
//      left bearing, on the right is the right bearing, and the width is
//      the advance width of the glyph.)
//
StrokeSVG = {
  chars: {
    normal: {
0x1D5BA : [0.75,0,0.55, {p: '73.506 383.217 C 152.169 424.383 267.286 454.607 321.478 389.986 C 387.739 310.973 355.954 245.726 360.463 2.578 M 364.21 232.827 C 364.631 228.618 174.57 206.265 165.062 203.095 C 113.857 186.035 63.172 162.238 87.734 88.6 C 123.86 -19.804 283.66 37.178 364.21 108.219-'}],
0x1D5BB : [0.75,0,0.55, {p: '118.756 691.217 C 118.756 625.993 114.967 448.997 115.386 385.332 C 115.867 312.271 115.157 131.007 115.157 9.574 M 118.756 350.996 C 151.33 373.1 227.031 406.786 239.519 411.291 C 310.037 436.885 428.123 414.249 445.688 272.775 C 467.071 100.551 341.059 -83.796 118.756 110.375-'}],
0x1D5BC : [0.75,0,0.55, {p: '400.34 383.958 C 224.131 474.509 69.728 406.822 71.978 225.315 C 74.977 -16.602 311.063 1.627 409.603 77.698-'}],
0x1D5BD : [0.75,0,0.55, {p: '394.827 355.084 C 343.03 381.585 73.937 549.542 77.962 213.385 C 80.147 30.918 219.323 -35 394.827 103.012 M 394.827 682.892 C 399.708 568.844 398.914 446.678 398.502 332.057 C 398.214 251.773 398.55 67.198 399.542 2.035-'}],
0x1D5BE : [0.75,0,0.55, {p: '75.9 261.009 C 75.9 261.009 382.704 252.357 382.854 261.264 C 384.207 341.678 317.201 432.941 236.806 435.178 C 149.609 437.604 74.525 333.168 72.523 245.96 C 70.2 144.808 136.88 31.761 238.047 30.229 C 310.456 29.133 404.424 77.357 404.424 77.357-'}],
0x1D5BF : [0.75,0,0.55, {p: '346 655.883 C 189.235 702.503 145.081 617.526 143.532 553.385 C 143.11 535.893 137.071 91.588 138.879 3.52 M 29.655 409.245 C 119.603 409.245 195.521 409.323 285.565 409.323-'}],
0x1D5C0 : [0.75,0,0.55, {p: '98.918 296.59 C 100.68 381.152 166.767 418.781 228.659 415.643 C 310.723 411.482 339.044 355.971 343.802 297.645 C 350.647 213.737 308.672 162.974 238.319 155.162 C 142.875 144.564 99.172 237.076 101.809 293.542 M 129.136 194.115 C 71.493 126.783 106.444 66.276 118.969 45.527 C 131.631 24.55 251.538 41.05 273.311 39.865 C 412.14 32.312 429.36 -20.612 428.385 -66.936 C 426.961 -134.616 320.095 -173.32 247.007 -171.822 C 103.363 -168.878 69.416 -95.905 69.727 -56.923 C 70.035 -18.256 135.454 39.839 135.454 32.984 M 324.503 396.723 C 362.369 429.455 480.564 417.36 476.658 417.36-'}],
0x1D5C1 : [0.75,0,0.55, {p: '123.04 690.689 C 123.04 555.114 125.139 522.811 123.964 332.294 C 123.761 299.297 118.999 16.428 118.999 8.148 M 124.321 261.921 C 137.346 288.949 150.844 412.471 279.898 417.222 C 363.831 420.312 394.259 345.436 394.259 296.062 C 394.259 230.283 395.382 70.47 395.382 5.166-'}],
0x1D5C2 : [0.75,0,0.55, {p: '118.776 447.694 C 120.598 389.07 118.818 243.339 119.092 213.672 C 119.169 205.281 117.169 50.228 115.237 3.446 M 118.268 618.76 C 118.268 626.035 118.283 634.025 118.283 640.783-'}],
0x1D5C3 : [0.75,0,0.55, {p: '146.572 445.172 C 146.572 228.362 151.752 -38.274 150.599 -66.944 C 147.857 -135.149 91.704 -163.385 57.746 -164.405 C 37.713 -165.007 -24.166 -154.091 -50 -138.114 M 137.138 616.364 C 137.138 625.006 137.138 633.647 137.138 642.289-'}],
0x1D5C4 : [0.75,0,0.55, {p: '116.07 691.86 C 116.07 635.371 116.07 490.109 116.07 345.253 C 116.07 200.397 116.07 55.948 116.07 1.085 M 123.07 162.654 C 175.93 216.989 212.215 255.855 246.736 290.623 C 290.747 334.948 351.203 398.378 395.435 443.28 M 233.351 265.131 C 253.011 237.084 297.407 174.192 315.536 147.138 C 335.895 116.758 390.789 32.874 413.658 1.085-'}],
0x1D5C5 : [0.75,0,0.55, {p: '121.019 2.649 L 119.741 347.234 L 118.463 691.819-'}],
0x1D5C6 : [0.75,0,0.55, {p: '116.575 451.968 L 116.525 2.888 C 116.525 2.888 117.991 234.403 117.285 254.397 C 114.241 340.553 208.266 419.658 278.859 418.753 C 375.002 417.52 397.196 351.578 397.944 337.241 C 399.412 309.102 396.507 3.465 396.507 3.465 C 396.507 3.465 399.532 233.618 400.558 265.271 C 403.022 341.299 476.185 418.588 552.812 418.177 C 664.815 417.576 670.879 341.04 673.465 314.58 C 676.3 285.57 675.492 5.296 675.492 5.296-'}],
0x1D5C7 : [0.75,0,0.55, {p: '117.309 450.948 L 121.445 2.689 C 121.445 2.689 119.811 227.787 119.176 258.069 C 117.095 357.383 223.542 413.308 275.154 413.984 C 378.606 415.339 400.326 353.723 400.185 305.425 C 400.128 285.972 398.426 1.931 398.426 1.931-'}],
0x1D5C8 : [0.75,0,0.55, {p: '244.147 421.253 C 123.391 420.271 73.649 303.878 75.181 213.598 C 76.765 120.197 148.9 20.987 255.428 22.082 C 351.688 23.071 423.69 115.048 423.417 213.97 C 423.117 322.475 371.597 415.297 250.738 419.98-'}],
0x1D5C9 : [0.75,0,0.55, {p: '121.831 442.947 L 120.1 -196.711 M 122.146 335.312 C 259.569 480 432.682 442.947 436.551 228.49 C 439.695 54.195 305.256 -33.832 129.592 103.083-'}],
0x1D5CA : [0.75,0,0.55, {p: '394.974 -199.052 L 392.928 451.31 M 75.515 132.098 C 209.499 -26.713 387.949 38.773 387.816 227.138 C 387.704 385.828 271.728 503.186 81.082 352.545-'}],
0x1D5CB : [0.75,0,0.55, {p: '114.483 450.771 L 116.36 -1.371 C 116.36 -1.371 117.702 199.292 117.873 237.516 C 118.532 384.976 329.102 417.736 329.102 417.736-'}],
0x1D5CC : [0.75,0,0.55, {p: '336.355 391.85 C 280.359 411.456 223.181 428.516 149.808 420.279 C 87.962 413.336 31.834 307.138 134.571 253.51 C 186.114 226.605 205.834 235.541 264.492 206.119 C 285.937 195.362 328.565 160.939 320.993 114.325 C 318.947 101.727 306.885 26.785 216.832 26.351 C 187.153 26.208 81.708 51.966 40.366 63.602-'}],
0x1D5CD : [0.75,0,0.55, {p: '139.458 568.316 C 139.458 568.316 135.012 199 135.729 162.37 C 138.159 38.199 152.446 33.236 183.968 24.831 C 221.901 14.716 320.71 58.628 320.71 58.628 M 17.793 407.598 L 169.252 408.217 L 320.71 408.836-'}],
0x1D5CE : [0.75,0,0.55, {p: '116.282 438.572 C 116.282 438.572 116.148 122.497 116.438 98.977 C 117.599 4.733 198.865 20.618 248.274 27.839 C 293.029 34.38 395.6 90.484 397.697 129.787 C 399.236 158.632 396.899 442.544 396.899 442.544 L 402.678 -0.633-'}],
0x1D5CF : [0.75,0,0.55, {p: '56.02 441.812 L 142.392 220.086 L 228.763 -1.639 L 314.341 221.848 L 399.918 445.335-'}],
0x1D5D0 : [0.75,0,0.55, {p: '58.864 447.783 L 124.538 225.222 L 190.212 2.661 L 261.625 225.412 L 333.038 448.163 L 406.236 224.428 L 479.433 0.694 L 551.008 224.29 L 622.583 447.886-'}],
0x1D5D1 : [0.75,0,0.55, {p: '55.715 445.97 L 406.19 -2.157 M 389.863 446.509 L 52.73 0.702-'}],
0x1D5D2 : [0.75,0,0.55, {p: '60.312 444.549 L 148.116 221.668 L 235.919 -1.213 M 397.523 441.567 L 199.611 -92.784 C 199.611 -92.784 170.769 -159.912 136.715 -172.63 C 106.621 -183.869 38.107 -160.201 38.107 -160.201-'}],
0x1D5D3 : [0.75,0,0.55, {p: '42.1 410.509 L 204.448 409.895 L 366.795 409.282 L 212.203 220.946 L 57.612 32.61 L 229.886 33.041 L 402.16 33.472-'}]
    }
  },

  styles: {
    //
    //  Stroke paths will be marked with the data-mjx-z attribute
    //
    '[data-mjx-no-z]': {
      'stroke-width': '100px',
      'stroke-linejoin': 'round',
      'stroke-linecap': 'round',
      fill: 'none'
    },
    //
    //  Bold mathvariant should use a heavier line
    //
    '[data-mjx-variant=B]': {
      'stroke-width': '150px'
    }
  }
  
};

try {
  module.exports = StrokeSVG;
} catch (err) {}
  
