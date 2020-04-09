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
        this.root;
        this.listChild=obj.Child;
        this.Node=document.createElement(this.Et);
        if(obj.Props!==undefined){
            this.setProps(obj.Props);
        } 
        this.Child=this.addChild(this.listChild);
    }
    addChild(list_etiq_hijo)
    {
        if(this.Node!==undefined)
        {
            if(list_etiq_hijo!==undefined){

                if(list_etiq_hijo.length>0)
                {
                    for(let i in list_etiq_hijo)
                    {
                        this.Node.appendChild(list_etiq_hijo[i].Node);
                    }
                }else{
                    this.Node.appendChild(list_etiq_hijo.Node);
                }
            }
        }
    }
    setProps(props)
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
    render(root)
    {   
        this.root=root;
        if(this.Node!==undefined){
            
            if(typeof(root)=='string')
            {

                let r=document.querySelector(root);
                r.innerHTML='';
                r.appendChild(this.Node);
            }else if(typeof(root)=='object'){
                root.innerHTML='';
                root.appendChild(this.Node);
            }
        }
        return this.Node;
    }
    remove(){
        this.Node=undefined;
        if(typeof(this.root)==='object'){
            this.root.innerHTML='';
        }
        else{
            let r=document.querySelector(this.root);
            r.innerHTML='';
        }   
    }
}

                