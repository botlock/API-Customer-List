import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomService } from "../services/DeleteCustomerService";
class  DeleteCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {id} = request.query as {id : string}
        const customerService = new DeleteCustomService();
        const customer = await customerService.execute({id})

        reply.send(customer)
    }
}

export {DeleteCustomerController}