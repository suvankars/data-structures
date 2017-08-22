class BubbleSort
  def swap(arr, i)
    temp = arr[i]
    arr[i] = arr[(i+1)]
    arr[i+1] = temp
    arr
  end

  def sort(arr)
    swaped=false
    loop do
      (0...(arr.length-1)).each do |i|
        if arr[i] > arr[i+1]
          arr = swap(arr, i)
          swaped = true
        elsif arr[i] <= arr[i+1]
            swaped = false
        end
      end
      puts swaped
      break if !swaped
    end
    arr
  end
end



input = [3, 2, 4, 1]

b = BubbleSort.new
p b.sort(input)