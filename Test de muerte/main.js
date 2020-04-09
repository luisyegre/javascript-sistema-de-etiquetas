var name='NO TENGO NOMBRE CIKEA ALGUNO DE LOS BOTONES';
var click=false;

var nombre=new Lavel({
    Et:'div',
    Props:[
        prop('className','container my-3')
    ],
    Child:[
        new Lavel({
            Et:'h1',
            Props:prop('innerHTML','Nombre: ')
        }),
        new Lavel({
            Et:'p',
            Props:prop('innerHTML',name)
        })
    ]
});

var main=new Lavel({
    Et:'div',
    Props:prop('className','container my-3'),
    Child:[
        new Lavel({
            Et:'button',
            Props:[
                prop('className','btn btn-primary m-3'),
                prop('innerHTML','MI BOTOON'),        
            ]
        }),
        new Lavel({
            Et:'button',
            Props:[
                prop('className','btn btn-warning m-3'),
                prop('innerHTML','MI BOTOON'),
            ]
        }),
        new Lavel({
            Et:'button',
            Props:[
                prop('className','btn btn-success m-3'),
                prop('innerHTML','MI BOTOON'),
            ]
        }),
        new Lavel({
            Et:'button',
            Props:[
                prop('className','btn btn-outline-danger m-3'),
                prop('innerHTML','DELETE ALL'),
            ]
        }),
    ]

})

main.listChild[0].setProps(prop('onclick',function(){
    nombre.listChild[1].setProps(prop('innerHTML','Pedro Porquer'));
    main.addChild(nombre);

    })
);

main.listChild[1].setProps(prop('onclick',function(){
    nombre.listChild[1].setProps(prop('innerHTML','Maria Antonieta'));
    main.addChild(nombre);

    })
);

main.listChild[2].setProps(prop('onclick',function(){
    nombre.listChild[1].setProps(prop('innerHTML','Federoco Guzman'));
    main.addChild(nombre);

    })
);
main.listChild[3].setProps(prop('onclick',function(){
    if(main){
        main.remove();
        }
    }
));


main.addChild(nombre);
main.render(document.querySelector('#main'));