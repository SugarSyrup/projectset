import NameCard from "../modules/NameCard.js";

export const getCreateCard = (req, res) => {
    return res.render("createTemplate");
}

export const postCreateCard = async (req, res) => {
    const {body : {comments, gender}} = req;

    const _namecard = await NameCard.create({ comments, gender });
    console.log(_namecard._id);

    return res.render("createDetails");
}

export const getNameCard = (req, res) => {
    const { id } = req;
    return res.render("namecard");
}

export const postNameCard = (req, res) => {
    return res.render("namecard");
}