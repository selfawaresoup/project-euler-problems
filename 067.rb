# file from https://projecteuler.net/project/resources/p067_triangle.txt
triangle_str = File.open("p067_triangle.txt").read

triangle = triangle_str.split("\n").map do |l|
  l.split(" ").map do |s|
    s.to_i
  end
end

(triangle.length - 2).downto(0).each do |l|
  line = triangle[l]
  line.each_with_index do |cell, c|
    nextA = triangle[l + 1][c]
    nextB = triangle[l + 1][c + 1]
    triangle[l][c] = cell + [nextA, nextB].max
  end
end

puts triangle[0][0]
