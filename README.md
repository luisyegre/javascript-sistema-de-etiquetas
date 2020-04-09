# javascript-sistema-de-etiquetas

#PRESENTACION:
  esta es una pequeña librera para manejar las etuitas de forma mas comodas desde el javascript 
  en lugar de usar el tipico document.createElement(elemento), luego agregarle cada propiedad y asi 
  decidi que mejor aprobechar las vantajas de las nuevas verciones de java script.
  usando las ventajs de la programacion orientada a objetos decidi que era hora de crear algo para facilitar el trabajo 
  sin tener que recrrir a frameworks y librerias tan grandes como react o vue o Angular.
  
#explicando las funciones y metodos:
funcion prop: esta funcion devuelve un objeto con las propiedades de la etiqueta.
declaracion:
  prop('nombre_de_la_propiedad','valor_de_la_propiedad')->{name_prop:nombre_de_la_propiedad,value_prop:valor_de_la_propiedad}
 
class Lavel:
  esta es por los momentos la unica clase que ha y no es mas que nuestra clase que funcionara de etiqueta java script
  resive como parametro (todos los nombre de los pametros al instaciar deben empezar en mayusculas), un objeto que 
  contendra     los la Et(nombre de la etiqueta que queremos crear),una lista de Props(puede ser un Array de varias 
  propiedades o una simple  propiedad)tambien posee la propiedad Child la cual sirva para agregar un hijodirectamente
  al declarar el Lavel.
  metodos:
    setProps: este sirve para cambiar el valor de las propiedades de la etiqueta resive como parametro un prop
    
    addChild: este sirve para agregar un Lavel hijo resive como parametro un new Latel para agregarlo como hijo
    
    render:   este sirve para renderizar la Lavel si no se llama a este metodo no se vera nuestra lavel en el DOM
              resive como parametro un identificador de un elemento html padre se puede usar, id,class, o directamente
              la etiqueta ya llamada
    
    remove:   estemetodo se encarga de eliminar el Lavel no resive parametros
#declaracion:
  var mi_etiqueta=new Lavel({
      Et:'div',
      Props:[
          prop('className','alert alert-primary'),
          prop('id','mi_alerta')
      ],
      Child:[
          new Lavel({
              Et:'h1',
              props:prop('innerHTML','SOY HIJO DE MI_ALERTA')
          })
      ]
  });
  para renderisar:
      mi_etiqueta.render('#main');
  para eliminar:
      mi_etiqueta.remove();
  para agregar manualmente un nodo hijo:
      mi_etiqueta.addChild(new Lavel({props...}))
      tambien se puede pasar una lista de hijos
      mi_etiqueta.addChild([
                            new Lavel({props...}),
                            new Lavel({props...}),
                            new Lavel({props...})
                       ]);
  para declara propiedades manualmente:
      mi_etiqueta.setProps(prop(props...))
      mi_etiqueta.setProps([
                            prop(props...),
                            prop(props...),
                            prop(props...)
                           ])
 
      
      
