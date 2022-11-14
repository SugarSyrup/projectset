import User from '../modules/User.js';

export const getUser = async (req,res) => {
    const user_id = req.params.user_id;
    try {
        const request_user = await User.findOne({_id:user_id});
        if(request_user) {
            // user 정보 없음
            console.log("Request Id is not matched!");
            res.status(404).json({msg:"Not matched! (_id)"});
        }
    } catch(error) {
        console.log(error);
    }
    
    res.status(200).json({msg:"success!",user:request_user});
}
export const postUser = async (req,res) => {
    const user_id = req.params.user_id;
    const {body : {name, email, number}} = req;
    //find user
    try {
        const request_user = await User.findOneAndUpdate({_id:user_id}, {name, email, number});
        if(request_user) {
            console.log("Request Id is not matched!");
            res.status(404).json({msg:"Not matched! (_id)"});
        }
    } catch(error) {
        console.log(error);
    }

    res.status(201).json({msg:"success"});

}

export const getNameCardList = (req,res) => {
    //api : request user own NameCard List? response!
}

export const getNameCard = (req,res) => {

}

export const getShorten = (req,res) => {
    
}

export const postShorten = (req, res) => {
    
}