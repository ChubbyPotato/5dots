function hasDuplicates(array, valueToCheck) {
    return array.some(function(a, i) {
        return a.every(function(ax, ix) {
            return valueToCheck[ix] === ax;
        })
    });
}

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
    $('.white').hide();
    $('.black').hide();

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
        var wwon=false;
        var bwon=false;
    
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
                if (wwon==true){
                    $('.num3').hide();
                    $('.wwon').show();
                    $('.goback').click(function(){
                        $('.wwon').hide();
                        $('.num1').show();
                    });
                }
            }
            
            
            else {
                for (var count = 0; count < bla.length; count++) {
                    if (JSON.stringify(bla[count]) == JSON.stringify([row, col + 1])) {
                        if (continueStrand(bla, [[row, col], [row, col + 1]], "left") == 3) {
                            var bwon=true;
                        }
                    }
                    else if (JSON.stringify(bla[count]) == JSON.stringify([row, col - 1])) {
                        if (continueStrand(bla, [[row, col], [row, col - 1]], "right") == 3) {
                            var bwon=true;
                        }
                    }
                    else if (JSON.stringify(bla[count]) == JSON.stringify([row + 1, col])) {
                        if (continueStrand(bla, [[row, col], [row + 1, col]], "up") == 3) {
                            var bwon=true;
                        }
                    }
                    else if (JSON.stringify(bla[count]) == JSON.stringify([row - 1, col])) {
                        if (continueStrand(bla, [[row, col], [row - 1, col]], "down") == 3) {
                            var bwon=true;
                        }
                    }
                    else if (JSON.stringify(bla[count]) == JSON.stringify([row + 1, col + 1])) {
                        if (continueStrand(bla, [[row, col], [row + 1, col + 1]], "diagonal_up_left") == 3) {
                            var bwon=true;
                        }
                    }
                    else if (JSON.stringify(bla[count]) == JSON.stringify([row - 1, col + 1])) {
                        if (continueStrand(bla, [[row, col], [row - 1, col + 1]], "diagonal_down_left") == 3) {
                            var bwon=true;
                        }
                    }
                    else if (JSON.stringify(bla[count]) == JSON.stringify([row + 1, col - 1])) {
                        if (continueStrand(bla, [[row, col], [row + 1, col - 1]], "diagonal_up_right") == 3) {
                            var bwon=true;
                        }
                    }
                    else if (JSON.stringify(bla[count]) == JSON.stringify([row - 1, col - 1])) {
                        if (continueStrand(bla, [[row, col], [row - 1, col - 1]], "diagonal_down_right") == 3) {
                            var bwon=true;
                        }
                    }
                }
                if (bwon==true){
                    $('.num3').hide();
                    $('.bwon').show();
                    $('.goback').click(function(){
                        $('.bwon').hide();
                        $('.num1').show();
                    });
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
            var turn=1;
            $('.num2').hide();
            $('.white').show();
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
    
        
            $( "#tableContainerW" ).html( generateGrid(32, 32) );
            
            $( "td" ).click(function() {
                $( this ).css( 'background-color', 'white' );
                var white = true;
                var playerW=[];
                var computer=[];
                var compwin=false;
                var Wplawin=false;
                
                
                $(this).css('cursor','default');
                var index = $( "td" ).index( this );
                var row = Math.floor( ( index ) / 32) + 1;
                var col = ( index % 32) + 1;
                var $td = $(this);
                
                if ($td.data('clicked')) {
                    return;
                }
                
                if (white == true){
                    playerW.push([row, col]);
                }
                
                var arow=row-1;
                var acol=col-1;
                var arowD=arow+1;
                var arowU=arow-1;
                var acolR=acol+1;
                var acolL=acol-1;
                
                if (turn===1){
                    $("tr:eq(" + 1 + ") td:eq(" + 1 + " )").css( 'background-color', 'black' )
                    $("tr:eq(" + 2 + ") td:eq(" + 2 + " )").css( 'background-color', 'black' )
                    $("tr:eq(" + 3 + ") td:eq(" + 3 + " )").css( 'background-color', 'black' )
                    $("tr:eq(" + 4 + ") td:eq(" + 4 + " )").css( 'background-color', 'black' )
                    $("tr:eq(" + 5 + ") td:eq(" + 5 + " )").css( 'background-color', 'black' )
                    white=true;
                    computer.push([arowD+1,acol+1]);
                    turn=turn+1;
                    
                }
                if(turn===2){
                    console.log(computer);
                    var wat= computer[0];
                    var wat1 = [wat[0]-1,wat[0]-1];
                    if (hasDuplicates(playerW, wat1)===false){
                        console.log("YAS")
                        $("tr:eq(" + wat[0]-2+ ") td:eq(" + wat[1]-2 + " )").css( 'background-color', 'black' )
                    }
                    else{
                        $("tr:eq(" + wat[0]-2+ ") td:eq(" + wat[1]-2 + " )").css( 'background-color', 'black' )
                    }
                    white=true;
                }

                if (white === true) {
                    turn=turn+1;
                    white=false;
                    
                    for (var count = 0; count < playerW.length; count++) {
                        if (JSON.stringify(playerW[count]) == JSON.stringify([row, col + 1])) {
                            if (continueStrand(playerW, [[row, col], [row, col + 1]], "left") == 3) {
                                var Wplawin=true;
                            }
                        }
                        else if (JSON.stringify(playerW[count]) == JSON.stringify([row, col - 1])) {
                            if (continueStrand(playerW, [[row, col], [row, col - 1]], "right") == 3) {
                                var Wplawin=true;
                            }
                        }
                        else if (JSON.stringify(playerW[count]) == JSON.stringify([row + 1, col])) {
                            if (continueStrand(playerW, [[row, col], [row + 1, col]], "up") == 3) {
                                var Wplawin=true;
                            }
                        }
                        else if (JSON.stringify(playerW[count]) == JSON.stringify([row - 1, col])) {
                            if (continueStrand(playerW, [[row, col], [row - 1, col]], "down") == 3) {
                                var Wplawin=true;
                            }
                        }
                        else if (JSON.stringify(playerW[count]) == JSON.stringify([row + 1, col + 1])) {
                            if (continueStrand(playerW, [[row, col], [row + 1, col + 1]], "diagonal_up_left") == 3) {
                                var Wplawin=true;
                            }
                        }
                        else if (JSON.stringify(playerW[count]) == JSON.stringify([row - 1, col + 1])) {
                            if (continueStrand(playerW, [[row, col], [row - 1, col + 1]], "diagonal_down_left") == 3) {
                                var Wplawin=true;
                            }
                        }
                        else if (JSON.stringify(playerW[count]) == JSON.stringify([row + 1, col - 1])) {
                            if (continueStrand(playerW, [[row, col], [row + 1, col - 1]], "diagonal_up_right") == 3) {
                                var Wplawin=true;
                            }
                        }
                        else if (JSON.stringify(playerW[count]) == JSON.stringify([row - 1, col - 1])) {
                            if (continueStrand(playerW, [[row, col], [row - 1, col - 1]], "diagonal_down_right") == 3) {
                                var Wplawin=true;
                            }
                        }
                    }
                }
                
                if (white==false) {
                    for (var count = 0; count < computer.length; count++) {
                        if (JSON.stringify(computer[count]) == JSON.stringify([row, col + 1])) {
                            if (continueStrand(computer, [[row, col], [row, col + 1]], "left") == 3) {
                                var compwin=true;
                            }
                        }
                        else if (JSON.stringify(computer[count]) == JSON.stringify([row, col - 1])) {
                            if (continueStrand(computer, [[row, col], [row, col - 1]], "right") == 3) {
                                var compwin=true;
                            }
                        }
                        else if (JSON.stringify(computer[count]) == JSON.stringify([row + 1, col])) {
                            if (continueStrand(computer, [[row, col], [row + 1, col]], "up") == 3) {
                                var compwin=true;
                            }
                        }
                        else if (JSON.stringify(computer[count]) == JSON.stringify([row - 1, col])) {
                            if (continueStrand(computer, [[row, col], [row - 1, col]], "down") == 3) {
                                var compwin=true;
                            }
                        }
                        else if (JSON.stringify(computer[count]) == JSON.stringify([row + 1, col + 1])) {
                            if (continueStrand(computer, [[row, col], [row + 1, col + 1]], "diagonal_up_left") == 3) {
                                var compwin=true;
                            }
                        }
                        else if (JSON.stringify(computer[count]) == JSON.stringify([row - 1, col + 1])) {
                            if (continueStrand(computer, [[row, col], [row - 1, col + 1]], "diagonal_down_left") == 3) {
                                var compwin=true;
                            }
                        }
                        else if (JSON.stringify(computer[count]) == JSON.stringify([row + 1, col - 1])) {
                            if (continueStrand(computer, [[row, col], [row + 1, col - 1]], "diagonal_up_right") == 3) {
                                var compwin=true;
                            }
                        }
                        else if (JSON.stringify(computer[count]) == JSON.stringify([row - 1, col - 1])) {
                            if (continueStrand(computer, [[row, col], [row - 1, col - 1]], "diagonal_down_right") == 3) {
                                var compwin=true;
                            }
                        }
                    }
                }
            });

            $('.back').click(function(){
                $('.num1').show();
                $('.white').hide();
            });
        });



        $('.bl').click(function(){
            var black = false;
            var playerB=[];
            var computer=[];
            var compwin=false;
            var Bplawin=false;
            
            
            $('.num2').hide();
            $('.white').show();
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
    
        
            $( "#tableContainerW" ).html( generateGrid(32, 32) );
            
            
            $( "td" ).click(function() {
                $(this).css('cursor','default');
                var index = $( "td" ).index( this );
                var row = Math.floor( ( index ) / 32) + 1;
                var col = ( index % 32) + 1;
                var $td = $(this);
    
                if ($td.data('clicked')) {
                    return;
                }
                
                if (black == true){
                    playerB.push([row, col]);
                } else {
                    computer.push([row, col]);
                }
    
                $td.data('clicked', true);
    
                $td.css('background-color',  black? 'white' : 'black');
                black = !black;
                
                
                if (black === true) {
                    for (var count = 0; count < playerB.length; count++) {
                        if (JSON.stringify(playerB[count]) == JSON.stringify([row, col + 1])) {
                            if (continueStrand(playerB, [[row, col], [row, col + 1]], "left") == 3) {
                                var Wplawin=true;
                            }
                        }
                        else if (JSON.stringify(playerB[count]) == JSON.stringify([row, col - 1])) {
                            if (continueStrand(playerB, [[row, col], [row, col - 1]], "right") == 3) {
                                var Wplawin=true;
                            }
                        }
                        else if (JSON.stringify(playerB[count]) == JSON.stringify([row + 1, col])) {
                            if (continueStrand(playerB, [[row, col], [row + 1, col]], "up") == 3) {
                                var Wplawin=true;
                            }
                        }
                        else if (JSON.stringify(playerB[count]) == JSON.stringify([row - 1, col])) {
                            if (continueStrand(playerB, [[row, col], [row - 1, col]], "down") == 3) {
                                var Wplawin=true;
                            }
                        }
                        else if (JSON.stringify(playerB[count]) == JSON.stringify([row + 1, col + 1])) {
                            if (continueStrand(playerB, [[row, col], [row + 1, col + 1]], "diagonal_up_left") == 3) {
                                var Wplawin=true;
                            }
                        }
                        else if (JSON.stringify(playerB[count]) == JSON.stringify([row - 1, col + 1])) {
                            if (continueStrand(playerB, [[row, col], [row - 1, col + 1]], "diagonal_down_left") == 3) {
                                var Wplawin=true;
                            }
                        }
                        else if (JSON.stringify(playerB[count]) == JSON.stringify([row + 1, col - 1])) {
                            if (continueStrand(playerB, [[row, col], [row + 1, col - 1]], "diagonal_up_right") == 3) {
                                var Wplawin=true;
                            }
                        }
                        else if (JSON.stringify(playerB[count]) == JSON.stringify([row - 1, col - 1])) {
                            if (continueStrand(playerB, [[row, col], [row - 1, col - 1]], "diagonal_down_right") == 3) {
                                var Wplawin=true;
                            }
                        }
                    }
                }
                
                
                 else {
                    for (var count = 0; count < computer.length; count++) {
                        if (JSON.stringify(computer[count]) == JSON.stringify([row, col + 1])) {
                            if (continueStrand(computer, [[row, col], [row, col + 1]], "left") == 3) {
                                var compwin=true;
                            }
                        }
                        else if (JSON.stringify(computer[count]) == JSON.stringify([row, col - 1])) {
                            if (continueStrand(computer, [[row, col], [row, col - 1]], "right") == 3) {
                                var compwin=true;
                            }
                        }
                        else if (JSON.stringify(computer[count]) == JSON.stringify([row + 1, col])) {
                            if (continueStrand(computer, [[row, col], [row + 1, col]], "up") == 3) {
                                var compwin=true;
                            }
                        }
                        else if (JSON.stringify(computer[count]) == JSON.stringify([row - 1, col])) {
                            if (continueStrand(computer, [[row, col], [row - 1, col]], "down") == 3) {
                                var compwin=true;
                            }
                        }
                        else if (JSON.stringify(computer[count]) == JSON.stringify([row + 1, col + 1])) {
                            if (continueStrand(computer, [[row, col], [row + 1, col + 1]], "diagonal_up_left") == 3) {
                                var compwin=true;
                            }
                        }
                        else if (JSON.stringify(computer[count]) == JSON.stringify([row - 1, col + 1])) {
                            if (continueStrand(computer, [[row, col], [row - 1, col + 1]], "diagonal_down_left") == 3) {
                                var compwin=true;
                            }
                        }
                        else if (JSON.stringify(computer[count]) == JSON.stringify([row + 1, col - 1])) {
                            if (continueStrand(computer, [[row, col], [row + 1, col - 1]], "diagonal_up_right") == 3) {
                                var compwin=true;
                            }
                        }
                        else if (JSON.stringify(computer[count]) == JSON.stringify([row - 1, col - 1])) {
                            if (continueStrand(computer, [[row, col], [row - 1, col - 1]], "diagonal_down_right") == 3) {
                                var compwin=true;
                            }
                        }
                    }
                }
            });

            $('.back').click(function(){
                $('.num1').show();
                $('.white').hide();
            });
        });
    });
});
