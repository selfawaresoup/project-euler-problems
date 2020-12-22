factorial = 1

(2..100).each do |n|
  factorial = factorial * n
end

digit_sum = 0

factorial.to_s.split('').each do |c|
  digit_sum += c.to_i
end

pp digit_sum
