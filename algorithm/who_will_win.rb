
def lin_search(m, g)
  return m*g
end

def bin_search(low, high, m, s, count)
    count = count +  1
    mid = ((low+high)/2).ceil   
    if (mid == m)
      return count * s 
    elsif (mid > m)
      bin_search(low, mid, m, s, count)
    elsif(mid < m)
      bin_search(mid, high, m, s, count)
    end
end

def predict(n, m, g, s)
  goutams_time = lin_search(m, g)
  subhas_time = bin_search(1, n, m, s, 0)

  if goutams_time < subhas_time
    return "Winner is Goutam"
  elsif goutams_time > subhas_time
    return "Winner is Subhas"
  else
    return "Draw"
  end
end

puts "Enter how many turn you want"
turn = gets

turn.to_i.times do 
  input = gets
  n, m, g, s = input.split(' ').collect{|i| i.to_i}
  puts predict(n, m, g, s)
end

