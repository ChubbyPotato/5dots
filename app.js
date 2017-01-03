var wwon=false;
var bwon=false;

function inGrid(grid, point) {
    for (var p = 0; p < grid.length; p++) {
        if (JSON.stringify(grid[p]) == JSON.stringify(point)) {
            return true;
        }
    }
    return false;
}

function continueStrand(grid, position, direction) {
    if (direction == "right" || direction == "left") {
        var right = 0;
        var offset = [0, 0];
        var count = [position[0]];
        while (right < 2) {
            if (right == 0) {
                offset = [offset[0], offset[1] + 1];
                if (inGrid(grid, [position[0][0] + offset[0], position[0][1] + offset[1]])) {
                    count.push([position[0][0] + offset[0], position[0][1] + offset[1]]);
                } else {
                    right = 1;
                    offset = [0, 0];
                }
            } else if (right == 1) {
                offset = [offset[0], offset[1] - 1];
                if (inGrid(grid, [position[0][0] + offset[0], position[0][1] + offset[1]])) {
                    count.push([position[0][0] + offset[0], position[0][1] + offset[1]]);
                } else {
                    right = 2;
                }
            }
        }
        if (count.length >= 5) {
            return 3;
        } 
    }

    else if (direction == "up" || direction == "down") {
        var right = 0;
        var offset = [0, 0];
        var count = [position[0]];
        while (right < 2) {
            if (right == 0) {
                offset = [offset[0] + 1, offset[1]];
                if (inGrid(grid, [position[0][0] + offset[0], position[0][1] + offset[1]])) {
                    count.push([position[0][0] + offset[0], position[0][1] + offset[1]]);
                } else {
                    right = 1;
                    offset = [0, 0];
                }
            } else if (right == 1) {
                offset = [offset[0] - 1, offset[1]];
                if (inGrid(grid, [position[0][0] + offset[0], position[0][1] + offset[1]])) {
                    count.push([position[0][0] + offset[0], position[0][1] + offset[1]]);
                } else {
                    right = 2;
                }
            }
        }
        if (count.length >= 5) {
            return 3;
        } 
    }

    else if (direction == "diagonal_down_left" || direction == "diagonal_up_right") {
        var right = 0;
        var offset = [0, 0];
        var count = [position[0]];
        while (right < 2) {
            if (right == 0) {
                offset = [offset[0] - 1, offset[1] + 1];
                if (inGrid(grid, [position[0][0] + offset[0], position[0][1] + offset[1]])) {
                    count.push([position[0][0] + offset[0], position[0][1] + offset[1]]);
                } else {
                    right = 1;
                    offset = [0, 0];
                }
            } else if (right == 1) {
                offset = [offset[0] + 1, offset[1] - 1];
                if (inGrid(grid, [position[0][0] + offset[0], position[0][1] + offset[1]])) {
                    count.push([position[0][0] + offset[0], position[0][1] + offset[1]]);
                } else {
                    right = 2;
                }
            }
        }
        if (count.length >= 5) {
            return 3;
        } 
    }

    else if (direction == "diagonal_up_left" || direction == "diagonal_down_right") {
        var right = 0;
        var offset = [0, 0];
        var count = [position[0]];
        while (right < 2) {
            if (right == 0) {
                offset = [offset[0] + 1, offset[1] + 1];
                if (inGrid(grid, [position[0][0] + offset[0], position[0][1] + offset[1]])) {
                    count.push([position[0][0] + offset[0], position[0][1] + offset[1]]);
                } else {
                    right = 1;
                    offset = [0, 0];
                }
            } else if (right == 1) {
                offset = [offset[0] - 1, offset[1] - 1];
                if (inGrid(grid, [position[0][0] + offset[0], position[0][1] + offset[1]])) {
                    count.push([position[0][0] + offset[0], position[0][1] + offset[1]]);
                } else {
                    right = 2;
                }
            }
        }
        if (count.length >= 5) {
            return 3;
        } 
    }
}


$(document).ready(function() {
    
    $('.bwon').hide();
    $('.wwon').hide();
    $('.num2').hide();
    $('.tips').hide();
    $('.num3').hide();

    $('.w').mouseenter(function() {
        $(this).css("background-color","black");
        $(this).css("color","white");
        $(this).css("border","2px solid white");
    });

    $('.w').mouseleave(function() {
        $(this).css("background-color","white");
        $(this).css("color","black");
        $(this).css("border","2px solid black");
    });

    $('.b').mouseenter(function() {
        $(this).css("background-color","white");
        $(this).css("color","black");
        $(this).css("border","2px solid black");
    });

    $('.b').mouseleave(function() {
        $(this).css("background-color","black");
        $(this).css("color","white");
        $(this).css("border","2px solid white");
    });


    $('.b').click(function(){
        $('.num1').hide();
        $('.tips').show();
        $('.back').click(function(){
            $('.num1').show();
            $('.tips').hide();
        });
    });

    $('.w').click(function(){
        $('.num1').hide();
        $('.tips').show();
        $('.back').click(function(){
            $('.num1').show();
            $('.tips').hide();
        });
    });


    $('#multi').mouseenter(function() {
        $(this).css("background-color","79A1A4");
    });

    $('#multi').mouseleave(function() {
        $(this).css("background-color","E2F8FA");
    });


    $('#multi').click(function() {
        $('.num1').hide();
        $('.num3').show();
        var bla=[];
        var whi=[];
        var white=true;
    
        function generateGrid( rows, cols ) {
            var grid = "<table>";
            for ( row = 1; row <= rows; row++ ) {
                grid += "<tr>"; 
                for ( col = 1; col <= cols; col++ ) {      
                    grid += "<td></td>";
                }
                grid += "</tr>";
            }
            return grid;
        }


        $( "#tableContainer" ).html( generateGrid(32, 32) );
        

        $( "td" ).click(function() {
            $(this).css('cursor','default');
            var index = $( "td" ).index( this );
            var row = Math.floor( ( index ) / 32) + 1;
            var col = ( index % 32) + 1;
            var $td = $(this);

            if ($td.data('clicked')) {
                return;
            }
            
            if (white == true){
                whi.push([row, col]);
            } else {
                bla.push([row, col]);
            }

            if (white === true) {
                for (var count = 0; count < whi.length; count++) {
                    if (JSON.stringify(whi[count]) == JSON.stringify([row, col + 1])) {
                        if (continueStrand(whi, [[row, col], [row, col + 1]], "left") == 3) {
                            var wwon=true;
                        }
                    }
                    else if (JSON.stringify(whi[count]) == JSON.stringify([row, col - 1])) {
                        if (continueStrand(whi, [[row, col], [row, col - 1]], "right") == 3) {
                            var wwon=true;
                        }
                    }
                    else if (JSON.stringify(whi[count]) == JSON.stringify([row + 1, col])) {
                        if (continueStrand(whi, [[row, col], [row + 1, col]], "up") == 3) {
                            var wwon=true;
                        }
                    }
                    else if (JSON.stringify(whi[count]) == JSON.stringify([row - 1, col])) {
                        if (continueStrand(whi, [[row, col], [row - 1, col]], "down") == 3) {
                            var wwon=true;
                        }
                    }
                    else if (JSON.stringify(whi[count]) == JSON.stringify([row + 1, col + 1])) {
                        if (continueStrand(whi, [[row, col], [row + 1, col + 1]], "diagonal_up_left") == 3) {
                            var wwon=true;
                        }
                    }
                    else if (JSON.stringify(whi[count]) == JSON.stringify([row - 1, col + 1])) {
                        if (continueStrand(whi, [[row, col], [row - 1, col + 1]], "diagonal_down_left") == 3) {
                            var wwon=true;
                        }
                    }
                    else if (JSON.stringify(whi[count]) == JSON.stringify([row + 1, col - 1])) {
                        if (continueStrand(whi, [[row, col], [row + 1, col - 1]], "diagonal_up_right") == 3) {
                            var wwon=true;
                        }
                    }
                    else if (JSON.stringify(whi[count]) == JSON.stringify([row - 1, col - 1])) {
                        if (continueStrand(whi, [[row, col], [row - 1, col - 1]], "diagonal_down_right") == 3) {
                            var wwon=true;
                        }
                    }
                }
                if (wwon=== true){
                    $('.num3').hide();
                    $('.wwon').show();
                }
            }
            
            
             else {
                for (var count = 0; count < bla.length; count++) {
                    if (JSON.stringify(bla[count]) == JSON.stringify([row, col + 1])) {
                        if (continueStrand(bla, [[row, col], [row, col + 1]], "left") == 3) {
                            var bwon= true;
                        }
                    }
                    else if (JSON.stringify(bla[count]) == JSON.stringify([row, col - 1])) {
                        if (continueStrand(bla, [[row, col], [row, col - 1]], "right") == 3) {
                            var bwon= true;
                        }
                    }
                    else if (JSON.stringify(bla[count]) == JSON.stringify([row + 1, col])) {
                        if (continueStrand(bla, [[row, col], [row + 1, col]], "up") == 3) {
                            var bwon= true;
                        }
                    }
                    else if (JSON.stringify(bla[count]) == JSON.stringify([row - 1, col])) {
                        if (continueStrand(bla, [[row, col], [row - 1, col]], "down") == 3) {
                            var bwon= true;
                        }
                    }
                    else if (JSON.stringify(bla[count]) == JSON.stringify([row + 1, col + 1])) {
                        if (continueStrand(bla, [[row, col], [row + 1, col + 1]], "diagonal_up_left") == 3) {
                            var bwon= true;
                        }
                    }
                    else if (JSON.stringify(bla[count]) == JSON.stringify([row - 1, col + 1])) {
                        if (continueStrand(bla, [[row, col], [row - 1, col + 1]], "diagonal_down_left") == 3) {
                            var bwon= true;
                        }
                    }
                    else if (JSON.stringify(bla[count]) == JSON.stringify([row + 1, col - 1])) {
                        if (continueStrand(bla, [[row, col], [row + 1, col - 1]], "diagonal_up_right") == 3) {
                            var bwon= true;
                        }
                    }
                    else if (JSON.stringify(bla[count]) == JSON.stringify([row - 1, col - 1])) {
                        if (continueStrand(bla, [[row, col], [row - 1, col - 1]], "diagonal_down_right") == 3) {
                            var bwon= true;
                        }
                    }
                }
                if (bwon === true){
                    $('.num3').hide();
                    $('.bwon').show();
                }
            }

            $td.data('clicked', true);

            $td.css('background-color', white ? 'white' : 'black');
            white = !white;
        });

        $('.back').click(function(){
            $('.num3').hide();
            $('.num1').show();
        });
    });


    $('#comp').mouseenter(function() {
        $(this).css("background-color","79A1A4");
    });

    $('#comp').mouseleave(function() {
        $(this).css("background-color","E2F8FA");
    });


    $('#comp').click(function() {
        $('.num1').hide();
        $('.num2').show();

        $('.back').click(function(){
            $('.num1').show();
            $('.num2').hide();
        });

        $('.bl').mouseenter(function() {
            $(this).css("background-color","79A1A4");
        });

        $('.bl').mouseleave(function() {
            $(this).css("background-color","E2F8FA");
        });

        $('.wh').mouseenter(function() {
            $(this).css("background-color","79A1A4");
        });

        $('.wh').mouseleave(function() {
            $(this).css("background-color","E2F8FA");
        });


        $('.wh').click(function(){
            $('.num2').hide();
            $('.num3').show();
            $('.back').click(function(){
                $('.num1').show();
                $('.num3').hide();
            });
        });


        $('.bl').click(function(){
            $('.num2').hide();
            $('.num3').show();

            $('.back').click(function(){
                $('.num3').hide();
                $('.num1').show();
            });
        });
        
    });

});
