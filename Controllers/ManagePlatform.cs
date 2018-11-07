//namespace of controller
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using LearningMVC.ManagePlatform;

namespace LearningMVC.Controllers{
    public class ManagePlatform:BaseController{

        protected string AccountString;        
        public IActionResult Index(){

            if(!CheckAccount(HttpContext)){
                return View("Login");
            }

            return View();
        }

        public IActionResult Login(){

            return View();
        }

        protected bool CheckAccount(HttpContext context){
            try{                
                string str=context.Session.GetString("UserAccount");
                if(string.IsNullOrWhiteSpace(str)){
                    return false;
                }
                AccountString=str;
                return true;
            }   
            catch(Exception ex){
                return false;
            }
        }  
    }
}