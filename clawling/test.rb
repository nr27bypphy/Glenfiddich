require 'selenium-webdriver'
require 'csv'
require 'date'

wait_time = 3
timeout = 4

Selenium::WebDriver.logger.output = File.join("./", "selenium.log")
Selenium::WebDriver.logger.level = :warn
driver = Selenium::WebDriver.for :chrome
driver.manage.timeouts.implicit_wait = timeout
wait = Selenium::WebDriver::Wait.new(timeout: wait_time)

driver.get('https://www.mapion.co.jp/phonebook/')

begin
  head = "会社名,TEL\n"
  category = driver.find_element(:css, 'body > div.wrapper > div.container.clearfix > div.article > section:nth-child(6) > div > section.phonebook-cat.phonebook-cat-M01 > ul > li:nth-child(1) > a')
  category.click
  
  prefecture = driver.find_element(:css, 'body > div.wrapper > div.container.clearfix > div.article > section > table > tbody > tr:nth-child(1) > td > a:nth-child(1)')
  prefecture.click
  
  cities = driver.find_elements(:css, 'body > div.wrapper > div.container.clearfix > div.article > section.section.type-a > ul > li')
  city_num = cities.length
  
  csv = CSV.generate(head, headers: true) do |csv|
    1.upto(city_num) do |i|
      city = driver.find_element(:css, "body > div.wrapper > div.container.clearfix > div.article > section.section.type-a > ul > li:nth-child(#{i}) > a")
      city.click
      store_name = driver.find_element(:css, 'body > div.wrapper > div.container.clearfix > div.article > section.section.type-a > table > tbody > tr > th > a')
      tel = driver.find_element(:css, 'body > div.wrapper > div.container.clearfix > div.article > section.section.type-a > table > tbody > tr > td:nth-child(3)')
      csv.add_row([store_name.text, tel.text])
      driver.navigate.back
      sleep(1)
    end
  end
  
  f = File.new("result_#{Date.today}.csv", "w")
  f.write(csv)
  f.close

rescue Selenium::WebDriver::Error::NoSuchElementError
  p 'no such element error!!'
  return
end

sleep 2

driver.quit
