// Why a Hero interface and not a Hero class? We want a strongly typed Hero.
// We get strong typing with either option. Our choice depends on how we
// intend to use the Hero.
// If we need a Hero that goes beyond simple properties, a Hero with logic
// and behavior, we must define a class. If we only need type checking,
// the interface is sufficient and lighter weight.
// Lighter weight? Transpiling a class to JavaScript produces code.
// Transpiling an interface produces — nothing. If the class does nothing
// (and there is nothing for a Hero class to do right now), we prefer an
// interface.
export interface Hero {
  id: number;
  name: string;
}
