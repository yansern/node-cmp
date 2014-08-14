Given(/^the program has finished$/) do
  @cucumber = `npm test`
end

Then(/^the output is correct for each test$/) do
  lines = @cucumber.split("\n")

  expect(lines.length).to eq(10)

  expect(lines[-6]).to eq('0')
  expect(lines[-5]).to eq('-1')
  expect(lines[-4]).to eq('1')
  expect(lines[-3]).to eq('1')
  expect(lines[-2]).to eq('true')
  expect(lines[-1]).to eq('true')
end
