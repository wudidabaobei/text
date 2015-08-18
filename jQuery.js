<font><font><script type= "text/javascript" ></font></font><font></font><font><font>
$( function (){</font></font><font></font><font><font>
    $( "#gotop" ).click( function (){</font></font><font></font><font><font>
        jQuery( "html,body" ).animate({</font></font><font></font><font><font>
            scrollTop:0</font></font><font></font><font><font>
        },1000);</font></font><font></font><font><font>
    });</font></font><font></font><font><font>
    $(window).scroll( function () {</font></font><font></font><font><font>
        if  ( $( this ).scrollTop() > 300){</font></font><font></font><font><font>
            $( '#gotop' ).fadeIn( "fast" );</font></font><font></font><font><font>
        } else  {</font></font><font></font><font><font>
            $( '#gotop' ).stop().fadeOut( "fast" );</font></font><font></font><font><font>
        }</font></font><font></font><font><font>
    });</font></font><font></font><font><font>
});</font></font><font></font><font><font>
</script></font></font><font></font>
