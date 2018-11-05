using Microsoft.AspNetCore.Mvc;
namespace LearningMVC.Controllers{
    public class LearningController:Controller{
        public IActionResult Index(){

            return View();
        }

        public IActionResult DotNet(){
            return View();
        }
    }
}