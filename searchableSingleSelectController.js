({
    doInit: function(component,event,helper){
        var forOpen = component.find("aura3");
        $A.util.toggleClass(forOpen, 'class3');
    },
    afterScriptsLoad: function(component, event, helper) {
        debugger;
        $(document).on('click', function (e) {
            if ((e.target.id)!="listbox-option-unique-id-01" && (e.target.id)!="input-1-1" && (e.target.id)!="Hello") {
                var name = e.target.id;
                $("#dropdown-1").addClass("class3");
            }
       });
    },
       
    onfocus : function(component,event,helper){
        var objectAPI= component.get("v.objectAPI");
        
        //var forOpen = component.find("aura3");
        //$A.util.toggleClass(forOpen, 'class3');
        if(component.get("v.SearchKeyWord")==''){
            var getInputkeyWord = '';
            helper.searchHelper(component,event,getInputkeyWord,objectAPI);
            $('#dropdown-1').removeClass('class3');
        }
        else{
            var getInputkeyWord = component.get("v.SearchKeyWord");
            helper.searchHelper(component,event,getInputkeyWord,objectAPI);
            $('#dropdown-1').addClass('class3');
        }
    },
    hello: function(component,event,helper){
        var objectAPI= component.get("v.objectAPI");
        var forOpen = component.find("aura3");
        if(component.get("v.SearchKeyWord")==''){
            var getInputkeyWord = '';
            helper.searchHelper(component,event,getInputkeyWord,objectAPI);
            $A.util.removeClass(forOpen, 'class3');
        }
    },
    keyPressController : function(component, event, helper) {
        var objectAPI= component.get("v.objectAPI");
        var getInputkeyWord = component.get("v.SearchKeyWord");         
        if( getInputkeyWord.length > 0 ){
            var forOpen = component.find("aura3");
            $A.util.removeClass(forOpen, 'class3');
            //$A.util.removeClass(forOpen, 'class3');
            
            helper.searchHelper(component,event,getInputkeyWord,objectAPI);
        }
        else{ 
            var getInputkeyWord = '';
            helper.searchHelper(component,event,getInputkeyWord,objectAPI);
            var forOpen = component.find("aura3");
            $A.util.removeClass(forOpen, 'class3');
            //component.set("v.listOfSearchRecords", null ); 
            
        }
    },
    selectRecord:function(component,event,helper){
        //alert(event.target.id);
        var selectedId = event.target.dataset.num;
        var selectedName=event.target.dataset.value;
        //alert ("Hello--> "+event.target.dataset.value);
        component.find('text-11').focus();
        component.set("v.SearchKeyWord",selectedName);
        var forOpen = component.find("aura3");
        //$A.util.addClass(forOpen, 'class1');
        $('#dropdown-1').addClass('class3');
    }
    
})
