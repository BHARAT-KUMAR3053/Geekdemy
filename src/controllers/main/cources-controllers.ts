import {
  CERTIFICATION,
  DEGREE,
  DIPLOMA,
  courses,
} from '@geekdemy/repository/courses-repository';
import { CourseCategory } from '@geekdemy/controllers/main/interfaces';

function handleAddProgramme(CATEGORY: CourseCategory, QUANTITY: string) {
  if (courses[CATEGORY]) {
    return;
  }

  switch (CATEGORY) {
    case 'CERTIFICATION':
      courses.totalAmount += CERTIFICATION * Number(QUANTITY);
      courses.leastAmount =
        courses.leastAmount < CERTIFICATION && courses.leastAmount !== 0
          ? courses.leastAmount
          : CERTIFICATION;
      break;
    case 'DEGREE':
      courses.totalAmount += DEGREE * Number(QUANTITY);
      courses.leastAmount =
        courses.leastAmount && courses.leastAmount !== 0 && courses.leastAmount < DEGREE
          ? courses.leastAmount
          : DEGREE;
      break;
    case 'DIPLOMA':
      courses.totalAmount += DIPLOMA * Number(QUANTITY);
      courses.leastAmount =
        courses.leastAmount < DIPLOMA && courses.leastAmount !== 0
          ? courses.leastAmount
          : DIPLOMA;
      break;
    default:
      console.log(`UNKNOWN_CATEGORY: ${CATEGORY}`);
      return;
  }

  courses[CATEGORY] = { quantity: Number(QUANTITY) };
  courses.totalQuantity += Number(QUANTITY);
  if (courses.totalQuantity >= 4) {
    if (courses['coupons'] === null) {
      courses['coupons'] = ['B4G1'];
      courses.discountAmount += courses.leastAmount;
      console.log(courses);
      return;
    }
    courses.discountAmount += courses.leastAmount;
    courses['coupons'].push('B4G1');
  }
  console.log(courses);
}

function handleCoupon(COUPON: string) {
  if (courses['coupons'] === null) {
    courses['coupons'] = [COUPON];
    console.log(courses);
    return;
  }
  if (courses['coupons'].includes(COUPON)) {return;}
  courses['coupons'].push(COUPON);
  console.log(courses);
}

function handleProMembership() {}

function printBill() {
  console.log(`SUB_TOTAL ${courses.totalAmount}`);
  let coupon_discount = 'COUPON_DISCOUNT';
  for (const i of courses.coupons!) {
    coupon_discount += ` ${i}`;
  }
  console.log(`${coupon_discount}`);
  console.log('TOTAL_PRO_DISCOUNT');
  console.log('PRO_MEMBERSHIP_FEE');
  console.log('ENROLLMENT_FEE');
  console.log('TOTAL');
}

export { handleAddProgramme, handleCoupon, handleProMembership, printBill };
