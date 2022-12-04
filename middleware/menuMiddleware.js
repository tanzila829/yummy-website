module.exports={
    menus:(req,res,next)=>{
        res.locals.menu="hellooooo";
        next();
    }
}