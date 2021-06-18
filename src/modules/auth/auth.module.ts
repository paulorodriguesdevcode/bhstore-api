import { Module } from '@nestjs/common';
import { AuthService } from './services';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './services/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './services/jwt.strategy';

@Module({

  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600s' },
    }),
  ],
  providers: [AuthService,  LocalStrategy,JwtStrategy],
  exports: [AuthService, JwtModule],

})
export class AuthModule {}
