import {Request, Response} from 'express'
import { DetailUserService } from '../../services/user/DetailUserService'

class DetailuserController{
  async handle(req: Request, res: Response){

   

    const detailUserService = new DetailUserService();

   

   

  }
}

export { DetailuserController  }