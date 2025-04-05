var parrot_frames = [
`[2J[3J[H[35m                         .cccc;;cc;';c.           [39m
[35m                      .,:dkdc:;;:c:,:d:.          [39m
[35m                     .loc'.,cc::c:::,..;:.        [39m
[35m                   .cl;....;dkdccc::,...c;        [39m
[35m                  .c:,';:'..ckc',;::;....;c.      [39m
[35m                .c:'.,dkkoc:ok:;llllc,,c,';:.     [39m
[35m               .;c,';okkkkkkkk:;lllll,:kd;.;:,.   [39m
[35m               co..:kkkkkkkkkk:;llllc':kkc..oNc   [39m
[35m             .cl;.,oxkkkkkkkkkc,:cll;,okkc'.cO;   [39m
[35m             ;k:..ckkkkkkkkkkkl..,;,.;xkko:',l'   [39m
[35m            .,...';dkkkkkkkkkkd;.....ckkkl'.cO;   [39m
[35m         .,,:,.;oo:ckkkkkkkkkkkdoc;;cdkkkc..cd,   [39m
[35m      .cclo;,ccdkkl;llccdkkkkkkkkkkkkkkkd,.c;     [39m
[35m     .lol:;;okkkkkxooc::coodkkkkkkkkkkkko'.oc     [39m
[35m   .c:'..lkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkd,.oc     [39m
[35m  .lo;,:cdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkd,.c;     [39m
[35m,dx:..;lllllllllllllllllllllllllllllllllc'...     [39m
[35mcNO;........................................      [39m
`,
`[35m[39m[2J[3J[H[33m                .ckx;'........':c.                [39m
[33m             .,:c:::::oxxocoo::::,',.             [39m
[33m            .odc'..:lkkoolllllo;..;d,             [39m
[33m            ;c..:o:..;:..',;'.......;.            [39m
[33m           ,c..:0Xx::o:.,cllc:,'::,.,c.           [39m
[33m           ;c;lkXKXXXXl.;lllll;lKXOo;':c.         [39m
[33m         ,dc.oXXXXXXXXl.,lllll;lXXXXx,c0:         [39m
[33m         ;Oc.oXXXXXXXXo.':ll:;'oXXXXO;,l'         [39m
[33m         'l;;kXXXXXXXXd'.'::'..dXXXXO;,l'         [39m
[33m         'l;:0XXXXXXXX0x:...,:o0XXXXx,:x,         [39m
[33m         'l;;kXXXXXXXXXKkol;oXXXXXXXO;oNc         [39m
[33m        ,c'..ckk0XXXXXXXXXX00XXXXXXX0:;o:.        [39m
[33m      .':;..:do::ooookXXXXXXXXXXXXXXXo..c;        [39m
[33m    .',',:co0XX0kkkxxOXXXXXXXXXXXXXXXOc..;l.      [39m
[33m  .:;'..oXXXXXXXXXXXXXXXXXXXXXXXXXXXXXko;';:.     [39m
[33m.ldc..:oOXKXXXXXXKXXKXXXXXXXXXXXXXXXXXXXo..oc     [39m
[33m:0o...:dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxo,.:,     [39m
[33mcNo........................................;'     [39m
`,
`[33m[39m[2J[3J[H[35m            .cc;.  ...  .;c.                      [39m
[35m         .,,cc:cc:lxxxl:ccc:;,.                   [39m
[35m        .lo;...lKKklllookl..cO;                   [39m
[35m      .cl;.,:'.okl;..''.;,..';:.                  [39m
[35m     .:o;;dkd,.ll..,cc::,..,'.;:,.                [39m
[35m     co..lKKKkokl.':lloo;''ol..;dl.               [39m
[35m   .,c;.,xKKKKKKo.':llll;.'oOxl,.cl,.             [39m
[35m   cNo..lKKKKKKKo'';llll;;okKKKl..oNc             [39m
[35m   cNo..lKKKKKKKko;':c:,'lKKKKKo'.oNc             [39m
[35m   cNo..lKKKKKKKKKl.....'dKKKKKxc,l0:             [39m
[35m   .c:'.lKKKKKKKKKk;....lKKKKKKo'.oNc             [39m
[35m     ,:.'oxOKKKKKKKOxxxxOKKKKKKxc,;ol:.           [39m
[35m     ;c..'':oookKKKKKKKKKKKKKKKKKk:.'clc.         [39m
[35m   ,xl'.,oxo;'';oxOKKKKKKKKKKKKKKKOxxl:::;,.      [39m
[35m  .dOc..lKKKkoooookKKKKKKKKKKKKKKKKKKKxl,;ol.     [39m
[35m  cx,';okKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKl..;lc.   [39m
[35m  co..:dddddddddddddddddddddddddddddddddl::',::.  [39m
[35m  co...........................................   [39m
`,
`[35m[39m[2J[3J[H[32m           .ccccccc.                              [39m
[32m      .,,,;cooolccoo;;,,.                         [39m
[32m     .dOx;..;lllll;..;xOd.                        [39m
[32m   .cdo;',loOXXXXXkll;';odc.                      [39m
[32m  ,ol:;c,':oko:cccccc,...ckl.                     [39m
[32m  ;c.;kXo..::..;c::'.......oc                     [39m
[32m,dc..oXX0kk0o.':lll;..cxxc.,ld,                   [39m
[32mkNo.'oXXXXXXo',:lll;..oXXOo;cOd.                  [39m
[32mKOc;oOXXXXXXo.':lol;..dXXXXl';xc                  [39m
[32mOl,:k0XXXXXX0c.,clc'.:0XXXXx,.oc                  [39m
[32mKOc;dOXXXXXXXl..';'..lXXXXXo..oc                  [39m
[32mdNo..oXXXXXXXOx:..'lxOXXXXXk,.:; ..               [39m
[32mcNo..lXXXXXXXXXOolkXXXXXXXXXkl,..;:';.            [39m
[32m.,;'.,dkkkkk0XXXXXXXXXXXXXXXXXOxxl;,;,;l:.        [39m
[32m  ;c.;:''''':doOXXXXXXXXXXXXXXXXXXOdo;';clc.      [39m
[32m  ;c.lOdood:'''oXXXXXXXXXXXXXXXXXXXXXk,..;ol.     [39m
[32m  ';.:xxxxxocccoxxxxxxxxxxxxxxxxxxxxxxl::'.';;.   [39m
[32m  ';........................................;l'   [39m
`,
`[32m[39m[2J[3J[H[31m                                                  [39m
[31m        .;:;;,.,;;::,.                            [39m
[31m     .;':;........'co:.                           [39m
[31m   .clc;'':cllllc::,.':c.                         [39m
[31m  .lo;;o:coxdllllllc;''::,,.                      [39m
[31m.c:'.,cl,.'l:',,;;'......cO;                      [39m
[31mdo;';oxoc;:l;;llllc'.';;'.,;.                     [39m
[31mc..ckkkkkkkd,;llllc'.:kkd;.':c.                   [39m
[31m'.,okkkkkkkkc;lllll,.:kkkdl,cO;                   [39m
[31m..;xkkkkkkkkc,ccll:,;okkkkk:,co,                  [39m
[31m..,dkkkkkkkkc..,;,'ckkkkkkkc;ll.                  [39m
[31m..'okkkkkkkko,....'okkkkkkkc,:c.                  [39m
[31mc..ckkkkkkkkkdl;,:okkkkkkkkd,.',';.               [39m
[31md..':lxkkkkkkkkxxkkkkkkkkkkkdoc;,;'..'.,.         [39m
[31mo...'';llllldkkkkkkkkkkkkkkkkkkdll;..'cdo.        [39m
[31mo..,l;'''''';dkkkkkkkkkkkkkkkkkkkkdlc,..;lc.      [39m
[31mo..;lc;;;;;;,,;clllllllllllllllllllllc'..,:c.     [39m
[31mo..........................................;'     [39m
`,
`[31m[39m[2J[3J[H[36m                                                  [39m
[36m           .,,,,,,,,,.                            [39m
[36m         .ckKxodooxOOdcc.                         [39m
[36m      .cclooc'....';;cool.                        [39m
[36m     .loc;;;;clllllc;;;;;:;,.                     [39m
[36m   .c:'.,okd;;cdo:::::cl,..oc                     [39m
[36m  .:o;';okkx;';;,';::;'....,:,.                   [39m
[36m  co..ckkkkkddkc,cclll;.,c:,:o:.                  [39m
[36m  co..ckkkkkkkk:,cllll;.:kkd,.':c.                [39m
[36m.,:;.,okkkkkkkk:,cclll;.ckkkdl;;o:.               [39m
[36mcNo..ckkkkkkkkko,.;loc,.ckkkkkc..oc               [39m
[36m,dd;.:kkkkkkkkkx;..;:,.'lkkkkko,.:,               [39m
[36m  ;:.ckkkkkkkkkkc.....;ldkkkkkk:.,'               [39m
[36m,dc..'okkkkkkkkkxoc;;cxkkkkkkkkc..,;,.            [39m
[36mkNo..':lllllldkkkkkkkkkkkkkkkkkdcc,.;l.           [39m
[36mKOc,c;''''''';lldkkkkkkkkkkkkkkkkkc..;lc.         [39m
[36mxx:':;;;;,.,,...,;;cllllllllllllllc;'.;od,        [39m
[36mcNo.....................................oc        [39m
`,
`[36m[39m[2J[3J[H[37m                                                  [39m
[37m                                                  [39m
[37m                   .ccccccc.                      [39m
[37m               .ccckNKOOOOkdcc.                   [39m
[37m            .;;cc:ccccccc:,:c::,,.                [39m
[37m         .c;:;.,cccllxOOOxlllc,;ol.               [39m
[37m        .lkc,coxo:;oOOxooooooo;..:,               [39m
[37m      .cdc.,dOOOc..cOd,.',,;'....':l.             [39m
[37m      cNx'.lOOOOxlldOc..;lll;.....cO;             [39m
[37m     ,do;,:dOOOOOOOOOl'':lll;..:d:''c,            [39m
[37m     co..lOOOOOOOOOOOl'':lll;.'lOd,.cd.           [39m
[37m     co.'dOOOOOOOOOOOo,.;llc,.,dOOc..dc           [39m
[37m     co..lOOOOOOOOOOOOc.';:,..cOOOl..oc           [39m
[37m   .,:;.'::lxOOOOOOOOOo:'...,:oOOOc.'dc           [39m
[37m   ;Oc..cl'':lldOOOOOOOOdcclxOOOOx,.cd.           [39m
[37m  .:;';lxl''''':lldOOOOOOOOOOOOOOc..oc            [39m
[37m,dl,.'cooc:::,....,::coooooooooooc'.c:            [39m
[37mcNo.................................oc            [39m
`,
`[37m[39m[2J[3J[H[36m                                                  [39m
[36m                                                  [39m
[36m                                                  [39m
[36m                        .cccccccc.                [39m
[36m                  .,,,;;cc:cccccc:;;,.            [39m
[36m                .cdxo;..,::cccc::,..;l.           [39m
[36m               ,do:,,:c:coxxdllll:;,';:,.         [39m
[36m             .cl;.,oxxc'.,cc,.';;;'...oNc         [39m
[36m             ;Oc..cxxxc'.,c;..;lll;...cO;         [39m
[36m           .;;',:ldxxxdoldxc..;lll:'...'c,        [39m
[36m           ;c..cxxxxkxxkxxxc'.;lll:'','.cdc.      [39m
[36m         .c;.;odxxxxxxxxxxxd;.,cll;.,l:.'dNc      [39m
[36m        .:,''ccoxkxxkxxxxxxx:..,:;'.:xc..oNc      [39m
[36m      .lc,.'lc':dxxxkxxxxxxxol,...',lx:..dNc      [39m
[36m     .:,',coxoc;;ccccoxxxxxxxxo:::oxxo,.cdc.      [39m
[36m  .;':;.'oxxxxxc''''';cccoxxxxxxxxxxxc..oc        [39m
[36m,do:'..,:llllll:;;;;;;,..,;:lllllllll;..oc        [39m
[36mcNo.....................................oc        [39m
`,
`[36m[39m[2J[3J[H[33m                                                  [39m
[33m                                                  [39m
[33m                              .ccccc.             [39m
[33m                         .cc;'coooxkl;.           [39m
[33m                     .:c:::c:,,,,,;c;;,.'.        [39m
[33m                   .clc,',:,..:xxocc;'..c;        [39m
[33m                  .c:,';:ox:..:c,,,,,,...cd,      [39m
[33m                .c:'.,oxxxxl::l:.,loll;..;ol.     [39m
[33m                ;Oc..:xxxxxxxxx:.,llll,....oc     [39m
[33m             .,;,',:loxxxxxxxxx:.,llll;.,,.'ld,   [39m
[33m            .lo;..:xxxxxxxxxxxx:.'cllc,.:l:'cO;   [39m
[33m           .:;...'cxxxxxxxxxxxxoc;,::,..cdl;;l'   [39m
[33m         .cl;':,'';oxxxxxxdxxxxxx:....,cooc,cO;   [39m
[33m     .,,,::;,lxoc:,,:lxxxxxxxxxxxo:,,;lxxl;'oNc   [39m
[33m   .cdxo;':lxxxxxxc'';cccccoxxxxxxxxxxxxo,.;lc.   [39m
[33m  .loc'.'lxxxxxxxxocc;''''';ccoxxxxxxxxx:..oc     [39m
[33molc,..',:cccccccccccc:;;;;;;;;:ccccccccc,.'c,     [39m
[33mOl;......................................;l'      [39m
`,
`[33m[39m[2J[3J[H[37m                                                  [39m
[37m                              ,ddoodd,            [39m
[37m                         .cc' ,ooccoo,'cc.        [39m
[37m                      .ccldo;...',,...;oxdc.      [39m
[37m                   .,,:cc;.,'..;lol;;,'..lkl.     [39m
[37m                  .dOc';:ccl;..;dl,.''.....oc     [39m
[37m                .,lc',cdddddlccld;.,;c::'..,cc:.  [39m
[37m                cNo..:ddddddddddd;':clll;,c,';xc  [39m
[37m               .lo;,clddddddddddd;':clll;:kc..;'  [39m
[37m             .,c;..:ddddddddddddd:';clll,;ll,..   [39m
[37m             ;Oc..';:ldddddddddddl,.,c:;';dd;..   [39m
[37m           .''',:c:,'cdddddddddddo:,''..'cdd;..   [39m
[37m         .cdc';lddd:';lddddddddddddd;.';lddl,..   [39m
[37m      .,;::;,cdddddol;;lllllodddddddlcldddd:.'l;  [39m
[37m     .dOc..,lddddddddlcc:;'';cclddddddddddd;;ll.  [39m
[37m   .coc,;::ldddddddddddddlcccc:ldddddddddl:,cO;   [39m
[37m,xl::,..,cccccccccccccccccccccccccccccccc:;':xx,  [39m
[37mcNd.........................................;lOc  [39m
`,
`[37m[39m[2J[3J[H[33m                         .cccc;;cc;';c.           [39m
[33m                      .,:dkdc:;;:c:,:d:.          [39m
[33m                     .loc'.,cc::c:::,..;:.        [39m
[33m                   .cl;....;dkdccc::,...c;        [39m
[33m                  .c:,';:'..ckc',;::;....;c.      [39m
[33m                .c:'.,dkkoc:ok:;llllc,,c,';:.     [39m
[33m               .;c,';okkkkkkkk:;lllll,:kd;.;:,.   [39m
[33m               co..:kkkkkkkkkk:;llllc':kkc..oNc   [39m
[33m             .cl;.,oxkkkkkkkkkc,:cll;,okkc'.cO;   [39m
[33m             ;k:..ckkkkkkkkkkkl..,;,.;xkko:',l'   [39m
[33m            .,...';dkkkkkkkkkkd;.....ckkkl'.cO;   [39m
[33m         .,,:,.;oo:ckkkkkkkkkkkdoc;;cdkkkc..cd,   [39m
[33m      .cclo;,ccdkkl;llccdkkkkkkkkkkkkkkkd,.c;     [39m
[33m     .lol:;;okkkkkxooc::coodkkkkkkkkkkkko'.oc     [39m
[33m   .c:'..lkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkd,.oc     [39m
[33m  .lo;,:cdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkd,.c;     [39m
[33m,dx:..;lllllllllllllllllllllllllllllllllc'...     [39m
[33mcNO;........................................      [39m
`,
`[33m[39m[2J[3J[H[34m                .ckx;'........':c.                [39m
[34m             .,:c:::::oxxocoo::::,',.             [39m
[34m            .odc'..:lkkoolllllo;..;d,             [39m
[34m            ;c..:o:..;:..',;'.......;.            [39m
[34m           ,c..:0Xx::o:.,cllc:,'::,.,c.           [39m
[34m           ;c;lkXKXXXXl.;lllll;lKXOo;':c.         [39m
[34m         ,dc.oXXXXXXXXl.,lllll;lXXXXx,c0:         [39m
[34m         ;Oc.oXXXXXXXXo.':ll:;'oXXXXO;,l'         [39m
[34m         'l;;kXXXXXXXXd'.'::'..dXXXXO;,l'         [39m
[34m         'l;:0XXXXXXXX0x:...,:o0XXXXx,:x,         [39m
[34m         'l;;kXXXXXXXXXKkol;oXXXXXXXO;oNc         [39m
[34m        ,c'..ckk0XXXXXXXXXX00XXXXXXX0:;o:.        [39m
[34m      .':;..:do::ooookXXXXXXXXXXXXXXXo..c;        [39m
[34m    .',',:co0XX0kkkxxOXXXXXXXXXXXXXXXOc..;l.      [39m
[34m  .:;'..oXXXXXXXXXXXXXXXXXXXXXXXXXXXXXko;';:.     [39m
[34m.ldc..:oOXKXXXXXXKXXKXXXXXXXXXXXXXXXXXXXo..oc     [39m
[34m:0o...:dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxo,.:,     [39m
[34mcNo........................................;'     [39m
`,
`[34m[39m[2J[3J[H[33m            .cc;.  ...  .;c.                      [39m
[33m         .,,cc:cc:lxxxl:ccc:;,.                   [39m
[33m        .lo;...lKKklllookl..cO;                   [39m
[33m      .cl;.,:'.okl;..''.;,..';:.                  [39m
[33m     .:o;;dkd,.ll..,cc::,..,'.;:,.                [39m
[33m     co..lKKKkokl.':lloo;''ol..;dl.               [39m
[33m   .,c;.,xKKKKKKo.':llll;.'oOxl,.cl,.             [39m
[33m   cNo..lKKKKKKKo'';llll;;okKKKl..oNc             [39m
[33m   cNo..lKKKKKKKko;':c:,'lKKKKKo'.oNc             [39m
[33m   cNo..lKKKKKKKKKl.....'dKKKKKxc,l0:             [39m
[33m   .c:'.lKKKKKKKKKk;....lKKKKKKo'.oNc             [39m
[33m     ,:.'oxOKKKKKKKOxxxxOKKKKKKxc,;ol:.           [39m
[33m     ;c..'':oookKKKKKKKKKKKKKKKKKk:.'clc.         [39m
[33m   ,xl'.,oxo;'';oxOKKKKKKKKKKKKKKKOxxl:::;,.      [39m
[33m  .dOc..lKKKkoooookKKKKKKKKKKKKKKKKKKKxl,;ol.     [39m
[33m  cx,';okKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKl..;lc.   [39m
[33m  co..:dddddddddddddddddddddddddddddddddl::',::.  [39m
[33m  co...........................................   [39m
`,
`[33m[39m[2J[3J[H[31m           .ccccccc.                              [39m
[31m      .,,,;cooolccoo;;,,.                         [39m
[31m     .dOx;..;lllll;..;xOd.                        [39m
[31m   .cdo;',loOXXXXXkll;';odc.                      [39m
[31m  ,ol:;c,':oko:cccccc,...ckl.                     [39m
[31m  ;c.;kXo..::..;c::'.......oc                     [39m
[31m,dc..oXX0kk0o.':lll;..cxxc.,ld,                   [39m
[31mkNo.'oXXXXXXo',:lll;..oXXOo;cOd.                  [39m
[31mKOc;oOXXXXXXo.':lol;..dXXXXl';xc                  [39m
[31mOl,:k0XXXXXX0c.,clc'.:0XXXXx,.oc                  [39m
[31mKOc;dOXXXXXXXl..';'..lXXXXXo..oc                  [39m
[31mdNo..oXXXXXXXOx:..'lxOXXXXXk,.:; ..               [39m
[31mcNo..lXXXXXXXXXOolkXXXXXXXXXkl,..;:';.            [39m
[31m.,;'.,dkkkkk0XXXXXXXXXXXXXXXXXOxxl;,;,;l:.        [39m
[31m  ;c.;:''''':doOXXXXXXXXXXXXXXXXXXOdo;';clc.      [39m
[31m  ;c.lOdood:'''oXXXXXXXXXXXXXXXXXXXXXk,..;ol.     [39m
[31m  ';.:xxxxxocccoxxxxxxxxxxxxxxxxxxxxxxl::'.';;.   [39m
[31m  ';........................................;l'   [39m
`,
`[31m[39m[2J[3J[H[37m                                                  [39m
[37m        .;:;;,.,;;::,.                            [39m
[37m     .;':;........'co:.                           [39m
[37m   .clc;'':cllllc::,.':c.                         [39m
[37m  .lo;;o:coxdllllllc;''::,,.                      [39m
[37m.c:'.,cl,.'l:',,;;'......cO;                      [39m
[37mdo;';oxoc;:l;;llllc'.';;'.,;.                     [39m
[37mc..ckkkkkkkd,;llllc'.:kkd;.':c.                   [39m
[37m'.,okkkkkkkkc;lllll,.:kkkdl,cO;                   [39m
[37m..;xkkkkkkkkc,ccll:,;okkkkk:,co,                  [39m
[37m..,dkkkkkkkkc..,;,'ckkkkkkkc;ll.                  [39m
[37m..'okkkkkkkko,....'okkkkkkkc,:c.                  [39m
[37mc..ckkkkkkkkkdl;,:okkkkkkkkd,.',';.               [39m
[37md..':lxkkkkkkkkxxkkkkkkkkkkkdoc;,;'..'.,.         [39m
[37mo...'';llllldkkkkkkkkkkkkkkkkkkdll;..'cdo.        [39m
[37mo..,l;'''''';dkkkkkkkkkkkkkkkkkkkkdlc,..;lc.      [39m
[37mo..;lc;;;;;;,,;clllllllllllllllllllllc'..,:c.     [39m
[37mo..........................................;'     [39m
`,
`[37m[39m[2J[3J[H[36m                                                  [39m
[36m           .,,,,,,,,,.                            [39m
[36m         .ckKxodooxOOdcc.                         [39m
[36m      .cclooc'....';;cool.                        [39m
[36m     .loc;;;;clllllc;;;;;:;,.                     [39m
[36m   .c:'.,okd;;cdo:::::cl,..oc                     [39m
[36m  .:o;';okkx;';;,';::;'....,:,.                   [39m
[36m  co..ckkkkkddkc,cclll;.,c:,:o:.                  [39m
[36m  co..ckkkkkkkk:,cllll;.:kkd,.':c.                [39m
[36m.,:;.,okkkkkkkk:,cclll;.ckkkdl;;o:.               [39m
[36mcNo..ckkkkkkkkko,.;loc,.ckkkkkc..oc               [39m
[36m,dd;.:kkkkkkkkkx;..;:,.'lkkkkko,.:,               [39m
[36m  ;:.ckkkkkkkkkkc.....;ldkkkkkk:.,'               [39m
[36m,dc..'okkkkkkkkkxoc;;cxkkkkkkkkc..,;,.            [39m
[36mkNo..':lllllldkkkkkkkkkkkkkkkkkdcc,.;l.           [39m
[36mKOc,c;''''''';lldkkkkkkkkkkkkkkkkkc..;lc.         [39m
[36mxx:':;;;;,.,,...,;;cllllllllllllllc;'.;od,        [39m
[36mcNo.....................................oc        [39m
`,
`[36m[39m[2J[3J[H[31m                                                  [39m
[31m                                                  [39m
[31m                   .ccccccc.                      [39m
[31m               .ccckNKOOOOkdcc.                   [39m
[31m            .;;cc:ccccccc:,:c::,,.                [39m
[31m         .c;:;.,cccllxOOOxlllc,;ol.               [39m
[31m        .lkc,coxo:;oOOxooooooo;..:,               [39m
[31m      .cdc.,dOOOc..cOd,.',,;'....':l.             [39m
[31m      cNx'.lOOOOxlldOc..;lll;.....cO;             [39m
[31m     ,do;,:dOOOOOOOOOl'':lll;..:d:''c,            [39m
[31m     co..lOOOOOOOOOOOl'':lll;.'lOd,.cd.           [39m
[31m     co.'dOOOOOOOOOOOo,.;llc,.,dOOc..dc           [39m
[31m     co..lOOOOOOOOOOOOc.';:,..cOOOl..oc           [39m
[31m   .,:;.'::lxOOOOOOOOOo:'...,:oOOOc.'dc           [39m
[31m   ;Oc..cl'':lldOOOOOOOOdcclxOOOOx,.cd.           [39m
[31m  .:;';lxl''''':lldOOOOOOOOOOOOOOc..oc            [39m
[31m,dl,.'cooc:::,....,::coooooooooooc'.c:            [39m
[31mcNo.................................oc            [39m
`,
`[31m[39m[2J[3J[H[35m                                                  [39m
[35m                                                  [39m
[35m                                                  [39m
[35m                        .cccccccc.                [39m
[35m                  .,,,;;cc:cccccc:;;,.            [39m
[35m                .cdxo;..,::cccc::,..;l.           [39m
[35m               ,do:,,:c:coxxdllll:;,';:,.         [39m
[35m             .cl;.,oxxc'.,cc,.';;;'...oNc         [39m
[35m             ;Oc..cxxxc'.,c;..;lll;...cO;         [39m
[35m           .;;',:ldxxxdoldxc..;lll:'...'c,        [39m
[35m           ;c..cxxxxkxxkxxxc'.;lll:'','.cdc.      [39m
[35m         .c;.;odxxxxxxxxxxxd;.,cll;.,l:.'dNc      [39m
[35m        .:,''ccoxkxxkxxxxxxx:..,:;'.:xc..oNc      [39m
[35m      .lc,.'lc':dxxxkxxxxxxxol,...',lx:..dNc      [39m
[35m     .:,',coxoc;;ccccoxxxxxxxxo:::oxxo,.cdc.      [39m
[35m  .;':;.'oxxxxxc''''';cccoxxxxxxxxxxxc..oc        [39m
[35m,do:'..,:llllll:;;;;;;,..,;:lllllllll;..oc        [39m
[35mcNo.....................................oc        [39m
`,
`[35m[39m[2J[3J[H[36m                                                  [39m
[36m                                                  [39m
[36m                              .ccccc.             [39m
[36m                         .cc;'coooxkl;.           [39m
[36m                     .:c:::c:,,,,,;c;;,.'.        [39m
[36m                   .clc,',:,..:xxocc;'..c;        [39m
[36m                  .c:,';:ox:..:c,,,,,,...cd,      [39m
[36m                .c:'.,oxxxxl::l:.,loll;..;ol.     [39m
[36m                ;Oc..:xxxxxxxxx:.,llll,....oc     [39m
[36m             .,;,',:loxxxxxxxxx:.,llll;.,,.'ld,   [39m
[36m            .lo;..:xxxxxxxxxxxx:.'cllc,.:l:'cO;   [39m
[36m           .:;...'cxxxxxxxxxxxxoc;,::,..cdl;;l'   [39m
[36m         .cl;':,'';oxxxxxxdxxxxxx:....,cooc,cO;   [39m
[36m     .,,,::;,lxoc:,,:lxxxxxxxxxxxo:,,;lxxl;'oNc   [39m
[36m   .cdxo;':lxxxxxxc'';cccccoxxxxxxxxxxxxo,.;lc.   [39m
[36m  .loc'.'lxxxxxxxxocc;''''';ccoxxxxxxxxx:..oc     [39m
[36molc,..',:cccccccccccc:;;;;;;;;:ccccccccc,.'c,     [39m
[36mOl;......................................;l'      [39m
`,
`[36m[39m[2J[3J[H[31m                                                  [39m
[31m                              ,ddoodd,            [39m
[31m                         .cc' ,ooccoo,'cc.        [39m
[31m                      .ccldo;...',,...;oxdc.      [39m
[31m                   .,,:cc;.,'..;lol;;,'..lkl.     [39m
[31m                  .dOc';:ccl;..;dl,.''.....oc     [39m
[31m                .,lc',cdddddlccld;.,;c::'..,cc:.  [39m
[31m                cNo..:ddddddddddd;':clll;,c,';xc  [39m
[31m               .lo;,clddddddddddd;':clll;:kc..;'  [39m
[31m             .,c;..:ddddddddddddd:';clll,;ll,..   [39m
[31m             ;Oc..';:ldddddddddddl,.,c:;';dd;..   [39m
[31m           .''',:c:,'cdddddddddddo:,''..'cdd;..   [39m
[31m         .cdc';lddd:';lddddddddddddd;.';lddl,..   [39m
[31m      .,;::;,cdddddol;;lllllodddddddlcldddd:.'l;  [39m
[31m     .dOc..,lddddddddlcc:;'';cclddddddddddd;;ll.  [39m
[31m   .coc,;::ldddddddddddddlcccc:ldddddddddl:,cO;   [39m
[31m,xl::,..,cccccccccccccccccccccccccccccccc:;':xx,  [39m
[31mcNd.........................................;lOc  [39m
`,
];
export { parrot_frames };
export default parrot_frames;