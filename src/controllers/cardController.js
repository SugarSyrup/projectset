import NameCard from "../modules/NameCard.js";

export const getCreateCard = (req, res) => {
    return res.render("createTemplate");
}

export const postCreateCard = async (req, res) => {
    const {body : {comments, gender}} = req;

    //네임카드 생성
    await NameCard.create({})

    return res.render("createDetails");
}
