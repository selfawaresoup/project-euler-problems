module Seventeen
  WORDS = {
    1000000 => "million",
    1000 => "thousand",
    100 => "hundred",
    90 => "ninety",
    80 => "eighty",
    70 => "seventy",
    60 => "sixty",
    50 => "fifty",
    40 => "forty",
    30 => "thirty",
    20 => "twenty",
    19=>"nineteen",
    18=>"eighteen",
    17=>"seventeen",
    16=>"sixteen",
    15=>"fifteen",
    14=>"fourteen",
    13=>"thirteen",
    12=>"twelve",
    11 => "eleven",
    10 => "ten",
    9 => "nine",
    8 => "eight",
    7 => "seven",
    6 => "six",
    5 => "five",
    4 => "four",
    3 => "three",
    2 => "two",
    1 => "one"
  }


  def self.num_to_words(number, join: " ")
    phrase = []
    remainder = number

    WORDS.each do |value, word|
      n = remainder / value

      if n > 0
        if n > 20
          count = self.num_to_words(n)
        else
          count = WORDS[n]
        end

        if phrase.last == "hundred"
          phrase.push("and")
        end

        unless n == 1 && value < 100
          phrase.push(count)
        end

        phrase.push(word)
      end
      remainder = remainder % value
    end
    phrase.join(join)
  end

  def self.range_sum(range)
    range.map {|n| self.num_to_words(n, join: "") }
  end

end

pp Seventeen::range_sum(1..1000).join('').length
