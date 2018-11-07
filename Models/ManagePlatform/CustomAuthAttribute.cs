using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Http;
using LearningMVC.ManagePlatform;

namespace LearningMVC.ManagePlatform{
    public class CustomAuthAttribute:IAuthorizationFilter{
        public void OnAuthorization(AuthorizationFilterContext filterContext){
            var info=filterContext.HttpContext.Session.GetString("UserAccount");

            
        }
    }
}