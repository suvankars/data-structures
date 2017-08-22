arr = [2,4,8,10,12]
elm = 11  

def bs(arr, elm, l, r)
  if (r >= l)
    mid = (l + (r-l)/2).to_i
    if (arr[mid] == elm)
      return mid
    elsif (arr[mid] < elm)
      bs(arr, elm, mid+1, r)
    elsif (arr[mid] > elm)
      bs(arr, elm, l, mid-1)
    end      
  else 
    return -1
  end 
end

def print_result(pos, elm)
  if pos == -1
    p "Element #{elm} Not found"
  else  
    p "Element #{elm} found at position #{pos}"
  end
end

def input
  puts "Enter elements seperated by space"
  elms = gets
  arr = elms.split(" ").collect{|i| i.to_i}
  puts "Enter  the element you want to search for"
  elm = gets
  return arr, elm.to_i
end

def binary_search
  puts "Number of test cases:"
  test_cases = gets
  arr = []
  test_cases.to_i.times do
    arr, elm = input
    pos = bs(arr, elm, 0, arr.length-1)
    print_result(pos, elm)
  end

end

binary_search 


