def leap_year(y)
  if y % 400 == 0
    true
  elsif y % 100 == 0
    false
  elsif y % 4 == 0
    true
  else
    false
  end
end

def month_length(m, y)
  if m == 2
    if leap_year(y)
      29
    else
      28
    end
  elsif [4,6,9,11].include?(m)
    30
  else
    31
  end
end

weekday = 0
day = 1
month = 1
year = 1900
ml = month_length(month, year)
sundays = 0

loop do
  puts "#{year}, #{month}, #{day}, #{weekday}"

  if year >= 1901 && weekday == 6 && day == 1
    sundays += 1
  end

  break if year == 2000 && month == 12 && day == 31

  if day == ml
    day = 1
    if month == 12
      month = 1
      year +=1
    else
      month +=1
    end
    ml = month_length(month, year)
  else
    day += 1
  end

  weekday = (weekday + 1) % 7
end

pp sundays
