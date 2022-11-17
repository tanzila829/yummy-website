const { validationResult } = require('express-validator');
const TeamModel=require('../models/Team');


//team controller
// admin: (req, res, next) =>{
// res.render('backend/index', { title: 'admin', layout: 'backend/layout' })
// },

module.exports={
team: (req, res, next) =>{
        TeamModel.find((err,docs)=>{
            if(err){
                return res.json({error:"Something went wrong!"+err})
            }
            return res.json({team:docs});
    });

  res.render('backend/team/index', { title: 'team', layout: 'backend/layout' })
  },

create: (req, res, next) =>{
res.render('backend/team/create', { title: 'team Create', layout: 'backend/layout' })
},
edit: (req, res, next) =>{
res.render('index', { title: 'Edit Team', layout: 'backend/layout' })
},

delete: (req, res, next) =>{
res.render('index', { title: 'Team delete', layout: 'backend/layout' })
},
show: (req, res, next) =>{
res.render('index', { title: 'Team Show', layout: 'backend/layout' })
},

store: (req, res, next)=> {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({error:errors.mapped()});
  }

// return res.json(req.body);

const team=new TeamModel({
  name:req.body.name,
  image:req.body.image,
  designation:req.body.designation,
  facebook:req.body.facebook,
  twiter:req.body.facebook,
  instragram:req.body.instragram,
  linkedin:req.body.linkedin
});

Team.save((err,newTeam)=>{
  if(err){
    return res.json({error:"Something went wrong!"+err})
  }
  return res.json({team:newTeam});
});
},

update: (req, res, next) =>{
res.render('index', { title: 'Team Update', layout: 'backend/layout' })

},
}
