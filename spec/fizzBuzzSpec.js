describe('FizzBuzz', function() {

		var fizzbuzz;

	beforeEach(function(){
		fizzbuzz = new FizzBuzz();
	});

	describe('number checker', function() {
		it('checks if number is divisibe by 3', function() {
			expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
		});
	});

		describe('number checker', function() {
		it('checks if number is not divisibe by 3', function() {
			expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
		});
	});

		describe('number checker', function() {
		it('checks if number is divisibe by 5', function() {
			expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
		});
	});

		describe('number checker', function() {
		it('checks if number is not divisibe by 5', function() {
			expect(fizzbuzz.isDivisibleByFive(4)).toBe(false);
		});
	});

	describe('number checker', function() {
		it('checks if number is divisibe by 15', function() {
			expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
		});
	});

		describe('number checker', function() {
		it('checks if number is not divisibe by 15', function() {
			expect(fizzbuzz.isDivisibleByFifteen(4)).toBe(false);
		});
	});

		describe('fizzer', function() {
			it('returns fizz if number is divisible by 3', function() {
				expect(fizzbuzz.fizzer(3)).toEqual('fizz');
			});
		});

		describe('fizzer', function() {
			it('returns buzz if number is divisible by five', function() {
					expect(fizzbuzz.fizzer(5)).toEqual('buzz');
			});
		});

		describe('fizzer', function() {
			it('returns fizzbuzz if number is divisible by fifteen', function() {
					expect(fizzbuzz.fizzer(15)).toEqual('fizzbuzz');
			});
		});

		describe('fizzer', function() {
			it('returns number if number is not divisible by three or five', function() {
					expect(fizzbuzz.fizzer(4)).toEqual(4);
			});
		});
});