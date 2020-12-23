#!/usr/bin/env ruby

require "../lib/lib"

triangle_str = File.open("../data/p067_triangle.txt").read

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

result = triangle[0][0]
assert_equal 7273, result
puts result
