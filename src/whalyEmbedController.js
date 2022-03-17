({
    doInit: function(component, event, helper) {
        var user = $A.get("$SObjectType.CurrentUser");
        component.set("v.userId", user.Id);
        component.set("v.userEmail", user.Email);
        component.set("v.fetched", false);
        
        var action = component.get("c.generateJWT");
        action.setParams({ userId : user.Id, userEmail: user.Email, recordId: component.get("v.recordId") });
         action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                component.set("v.jwt", response.getReturnValue())
                component.set("v.iframeUrl", 'https://app.whaly.io/' + component.get("v.orgSlug") + '/embed/report/' + component.get("v.embedToken") + '?token=' + response.getReturnValue())
				component.set("v.fetched", true);
            }
            else if (state === "INCOMPLETE") {
                // do something
                component.set("v.fetched", true)
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
                component.set("v.fetched", true)
            }
            
        });

 
        $A.enqueueAction(action);
    }
})