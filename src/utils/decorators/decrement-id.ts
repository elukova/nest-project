import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const DecrementId = createParamDecorator(
  (data: string[], ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    data.forEach((element) => {
      const id = request.query[element];
      if (id) request.query[element] = id - 1;
    });
    data.forEach((element) => {
      const idb = request.body[element];
      if (idb) request.body[element] = idb - 1;
    });
  },
);
