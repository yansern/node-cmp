Given(/^the program has finished$/) do
  @cucumber = `npm test`
end

Then(/^the output is correct for each test$/) do
  lines = @cucumber.split("\n")

  lines.length.should == 10

  lines[-6].should == '0'
  lines[-5].should == '-1'
  lines[-4].should == '1'
  lines[-3].should == '1'
  lines[-2].should == 'true'
  lines[-1].should == 'true'
end
