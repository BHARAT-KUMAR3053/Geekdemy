/* eslint-disable no-case-declarations */
import readline from 'readline';

import { Health } from '@geekdemy/controllers/health/health';
import { checkForArguments } from '@geekdemy/utils/utility-functions';
import { handleAddProgramme, handleCoupon, handleProMembership, printBill } from '@geekdemy/controllers/main/cources-controllers';
import { CourseCategory } from '@geekdemy/controllers/main/interfaces';

export class Server {

  public start(): void {
    //health check
    const health = new Health();
    health.health();
    this.createInputOutputInterface();
  }

  private createInputOutputInterface(){
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '> ',
    });

    rl.prompt();

    rl.on('line', (line) => {
      const input = line.trim().split(' ');

      const command = input[0].toUpperCase();
      const args = input.slice(1);

      switch (command) {
        case 'ADD_PROGRAMME':
          checkForArguments(args, 2);
          const [PROGRAM_CATEGORY, PROGRAM_QUANTITY] = args;
          handleAddProgramme(PROGRAM_CATEGORY as CourseCategory, PROGRAM_QUANTITY);
          break;
        case 'APPLY_COUPON':
          checkForArguments(args, 1);
          const [COUPON] = args;
          handleCoupon(COUPON);
          break;
        case 'ADD_PRO_MEMBERSHIP':
          handleProMembership();
          break;
        case 'PRINT_BILL':
          printBill();
          break;
        default:
          console.log(`UNKNOWN_COMMAND ${command}`);
          break;
      }

      rl.prompt();
    }).on('close', () => {
      console.log('Exiting the application');
      process.exit(0);
    });
  }

}
