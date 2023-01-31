import{Module} from "@nestjs/common";
import { AdminController } from "../controllers/admin.controller";
import { AdminService } from "../services/admin.service";
@Module({
    imports: [],
    controllers:[AdminController],
    providers:[AdminService]
})
export class AdminModule {}