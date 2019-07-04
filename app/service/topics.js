const Servece = require('egg').Service;

class TopiceService extends Servece{
  async userList(){
    const {ctx} = this;
    const result = await ctx.model.User.find({})
    return result;
  }
  async add(params){
    const { ctx } = this;
    const result = await ctx.model.User.create(params);
    console.log(result)
    return result;
  }
}

module.exports = TopiceService