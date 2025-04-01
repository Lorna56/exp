import factorial from "../../factory.js";
import { describe, it } from "mocha";
import { assert } from "chai";

describe( "Factorial", () => {
  it( "Should return 120 when given 5", () => {
    assert.equal( factorial( 5 ), 120 );
  } );
  it( "Should return 1 when given 0", () => {
    assert.equal( factorial( 0 ), 1 );
  } );
  it( "Should give a warning when given a negative number", () => {
    assert.equal( factorial( -1 ), "Invalid input" );
  } );
  it( "Should give a warning when given a string", () => {
    assert.equal( factorial( "fgngdfk" ), "Invalid input" );
  } );
} );
