Given(/^the program has finished$/) do
  @cucumber = `node example.js`
end

Then(/^the output is correct for each test$/) do
  lines = @cucumber.split("\n")

  lines.length.should == 6

  lines[0].should == '0'
  lines[1].should == '-1'
  lines[2].should == '1'
  lines[3].should == '1'
  lines[4].should == 'true'
  lines[5].should == 'true'
end
