import { AbilityBuilder, InferSubjects, MongoAbility, createMongoAbility } from '@casl/ability';
import { ACTIONS_ENUM, SUBJECTS_ENUM } from '@/constants';
import { Blog, User } from '@/interfaces';

export type Subjects = InferSubjects<Blog | User>;
type AppAbility = MongoAbility<[ACTIONS_ENUM, Subjects]>;

const { can, build, rules } = new AbilityBuilder<AppAbility>(createMongoAbility);
can(ACTIONS_ENUM.READ, SUBJECTS_ENUM.BLOG);
export const ability = build();

export const buildUserAbility = (user: User) => {
  can(ACTIONS_ENUM.UPDATE, SUBJECTS_ENUM.BLOG, { userId: user.id });
  console.log(rules);
  ability.update(rules);
};
