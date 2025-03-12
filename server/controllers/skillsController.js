const Skill = require("../models/Skills");
const fs = require('fs');
const { v2: cloudinary } = require('cloudinary');



exports.getAllSkills = async(req, res, next) => {
    try {
        
        const skills = await Skill.find();

        res.status(200).json({skills});
    } catch (error) {
        next(error);
    }
}


exports.addNewSkill = async(req, res, next) => {
    const { title, categorie, niveau } = req.body;
    try {
        if (!req.file) {
            throw new Error("no file uploaded")
        }
        
        if (await Skill.exists({title: req.body.title})) {
            throw new Error("skill already exists")
        }
        
        const uploadResult = await cloudinary.uploader.upload(req.file.path, {
            folder: 'images',
        });

        fs.unlinkSync(req.file.path);

        const skill = new Skill({
            title,
            categorie,
            niveau,
            img_public_id: uploadResult.public_id,
            img: uploadResult.secure_url
        });

        await skill.save();

        res.status(201).json({ skill });

    } catch (error) {
        next(error);
    }
}

exports.deleteSkill = async (req, res, next) => {
   const { id } = req.params;

   try {
   const mySkill = await Skill.findById(id);

   if (!mySkill){
    throw new Error("wrong skill id");
}

   const deleteResultImg = await cloudinary.uploader.destroy(mySkill.img_public_id);

   const deleteResultSkill = await Skill.findByIdAndDelete(id);

   res.status(200).json({imgResult : deleteResultImg, skillResult: deleteResultSkill})

   } catch (error) {
    next(error);
}
}

exports.updateSkill = async (req, res, next) => {
    const { id } = req.params;
    const { title, categorie, niveau } = req.body;
    try {
    const mySkill = await Skill.findById(id);
    if (!mySkill){
        throw new Error("wrong skill id")
    }

const myTitle = title;
const myCategorie = categorie;
const myNiveau = niveau;        

if(req.file){
    const deleteResultImg = await cloudinary.uploader.destroy(mySkill.img_public_id); 
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: 'images',
    });
    fs.unlinkSync(req.file.path);

    

    const result = await Skill.findByIdAndUpdate(id, {
        title: myTitle, 
        categorie: myCategorie, 
        niveau: myNiveau,             
        img_public_id: uploadResult.public_id,
        img: uploadResult.secure_url
    }, { new: true })
        } else {                        
            const result = await Skill.findByIdAndUpdate(id, {
                title: myTitle, 
                categorie: myCategorie, 
                niveau: myNiveau
            }, { new: true })            
        }

   
    
 
    res.status(200).json({message : "skill mis a jour"})
 
    } catch (error) {
        next(error);
    }
 }