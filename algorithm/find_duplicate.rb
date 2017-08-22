class Array
  def find_duplicate
    select.with_index do |e,i|
     i != self.index(e)
    end
  end 
end
a = [1,2,1,2,45,3,2]
p a.find_duplicate