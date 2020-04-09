function prop(name,value){
    return{
        name_prop:name,
        value_prop:value
    }
}

class Lavel
{
    constructor(obj)
    {
        this.Et=obj.Et;
        
        this.listChild=obj.Child;
        this.Node=document.createElement(this.Et);
        if(obj.props!==undefined){
            this.set_props(obj.props);
        } 
        this.Child=this.addChild(this.listChild);
    }
    addChild(list_etiq_hijo)
    {
        if(this.Node!==undefined)
        {
            if(list_etiq_hijo)
            {
                for(let i in list_etiq_hijo)
                {
                    this.Node.appendChild(list_etiq_hijo[i].Node);
                }
            }
        }
    }
    set_props(props)
    {
        if(this.Node!==undefined)
        {

            if(props.length>0)
            {
                for(let i in props)
                {
                    this.Node[props[i]['name_prop']]=props[i]['value_prop'];
                }
            }
            else{
                this.Node[props['name_prop']]=props['value_prop'];

            }
        }   
    }
    delete(){
        self.Node=undefined;
    }
    render(root)
    {   
        if(this.Node!==undefined){
            
            root.innerHTML='';
            if(typeof(root)=='string')
            {
                let r=document.querySelector(root);
                r.appendChild(this.Node);
            }else if(typeof(root)=='object'){
                root.appendChild(this.Node);
            }
        }
        return this.Node;
    }
}
