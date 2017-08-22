def swap(arr, i,j)
  arr[i], arr[j] = arr[j], arr[i]
  return arr
end

def partition(arr, low, high)
  pivot = arr[high]
  i = low-1
 
  low..high.times do |j|
    if arr[j] <= pivot
      i = i+1
      arr[i], arr[j] = arr[j], arr[i]
    end
  end
  swap(arr, i+1, high)
  return i+1 
end

def quick_sort(arr, low, high)
  if (low< high)
    pi = partition(arr, low, high)
    quick_sort(arr, low, pi-1)
    quick_sort(arr, pi+1, high)
  end
end

a = [1,4,2,3,5]
quick_sort(a, 0, a.size-1 )
p a