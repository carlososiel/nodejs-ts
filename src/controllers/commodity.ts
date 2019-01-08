import { Controller, Get, Req, Res } from 'routing-controllers';

@Controller()
export class CommodityController {
    @Get('/commodities')
    getAll(@Req() request: any, @Res() response: any) {
        return response.json({'test': 'a'})
    }
}