
const getLeads = async (req,res)=>{

  try{

    
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    const skip = (page-1)*limit;

    const leads = await Lead.find()
      .skip(skip)
      .limit(limit);

    res.json({
      success:true,
      data:leads
    });

  }
  catch(err){
    res.status(500).send(err.message);
  }

}