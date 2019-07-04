'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx,service } = this;
    let data = await service.topics.userList()
    ctx.body = data
  }
  async add(){
    const { ctx,service } = this;
    let data = await service.topics.add(ctx.request.body)
    ctx.body = data;
  }
}

module.exports = HomeController;
