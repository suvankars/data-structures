class Node
    attr_reader :key, :left, :right
    def initialize( key )
	@key = key
	@left = nil
	@right = nil
    end
    
    def insert( key )
	if key < @key
	    #insert into left
	    @left.nil? ? @left = Node.new( key ) : @left.insert( key )
	elsif key > @key
	    @right.nil? ? @right = Node.new( key ) : @right.insert( key )
	    #insert into right
	end
	    #do nothing
    end
end

class BinaryTree

    def initialize
	@root = nil
    end

    def insert( key )
	if @root.nil?
	    @root = Node.new( key )
	else
	    @root.insert( key )
	end
    end
    
    def inorder( node = @root, &block)
	return if node.nil?
	inorder( node.left, &block)
	yield node 
	inorder( node.right, &block)
    end

    def preorder( node = @root, &block )
	return if node.nil?
	yield node
	preorder(node.left, &block)
	preorder(node.right, &block)
    end

    def postorder( node = @root, &block )
	return if node.nil?
	postorder(node.left, &block)
	postorder(node.right, &block)
	yield node
    end

    def search( value, node = @root )
	return nil if node.nil?
	if value == node.key
	    return node
	elsif value < node.key
	    search( value, node.left )
	elsif value > node.key
	    search(value, node.right )
	end
    end

    def has? ( key )
	found = self.search ( key )
	not found.nil?
    end
end
