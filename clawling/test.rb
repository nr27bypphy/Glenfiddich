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
  head = "会社名,TEL,都道府県,市区町村,カテゴリ,ジャンル\n"
  genres = driver.find_elements(:css, 'body > div.wrapper > div.container.clearfix > div.article > section:nth-child(6) > div > section.phonebook-cat')
  genre_num = genres.length

  csv = CSV.generate(head, headers: true) do |csv|

    1.upto(genre_num) do |l|
      genre = driver.find_element(:css, "body > div.wrapper > div.container.clearfix > div.article > section:nth-child(6) > div > section.phonebook-cat.phonebook-cat-M#{format('%02d', l)} > h2 > a")
      p genre_name = genre.text
      
      p format('%02d', l)
      categories = driver.find_elements(:css, "body > div.wrapper > div.container.clearfix > div.article > section:nth-child(6) > div > section.phonebook-cat.phonebook-cat-M#{format('%02d', l)} > ul > li")
      category_num = categories.length
  
      1.upto(category_num) do |k|
        category = driver.find_element(:css, "body > div.wrapper > div.container.clearfix > div.article > section:nth-child(6) > div > section.phonebook-cat.phonebook-cat-M#{format('%02d', l)} > ul > li:nth-child(#{k}) > a")
        p category_name = category.text
        category.click
        sleep(1)
    
        # prefectures = driver.find_elements(:css, "body > div.wrapper > div.container.clearfix > div.article > section > table > tbody > tr:nth-child(2) > td > a") 
        # prefecture_num = prefectures.length
        prefecture_num = 4
        
        1.upto(prefecture_num) do |j|
          prefecture = driver.find_element(:css, "body > div.wrapper > div.container.clearfix > div.article > section > table > tbody > tr:nth-child(2) > td > a:nth-child(#{j})")
          p prefecture_name = prefecture.text
          prefecture.click
          sleep(1)
    
          cities = driver.find_elements(:css, 'body > div.wrapper > div.container.clearfix > div.article > section.section.type-a > ul > li')
          city_num = cities.length
        
          1.upto(city_num) do |i|
            city = driver.find_element(:css, "body > div.wrapper > div.container.clearfix > div.article > section.section.type-a > ul > li:nth-child(#{i}) > a")
            p city_name = city.text
            city.click
            sleep(1)
    
            stores = driver.find_elements(:css, 'body > div.wrapper > div.container.clearfix > div.article > section.section.type-a > table > tbody > tr') 
            store_num = stores.length

            1.upto(store_num) do |h|
              store = driver.find_element(:css, "body > div.wrapper > div.container.clearfix > div.article > section.section.type-a > table > tbody > tr:nth-child(#{h}) > th > a")
              store_name = store.text
              tel = driver.find_element(:css, "body > div.wrapper > div.container.clearfix > div.article > section.section.type-a > table > tbody > tr:nth-child(#{h}) > td:nth-child(3)")
              tel_number = tel.text
              csv.add_row([store_name, tel_number, prefecture_name, city_name, category_name, genre_name])
              break if h > 1
            end
            driver.navigate.back
            break if i > 1
          end
          driver.navigate.back
          break if j > 1
        end
        driver.navigate.back
        break if k > 1
      end
      break if l > 1
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
