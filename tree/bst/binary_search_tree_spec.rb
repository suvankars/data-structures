require './binary_search_tree'

describe BinaryTree do

    before(:each) do
	@tree = BinaryTree.new
	@keys = %w{F B G A D I C E H}
	@keys.each { |key| @tree.insert(key)}
    end

    it "should have a node for each key inserted into the tree" do
	@keys.each do |key|
	    @tree.has?(key).should == true
	end
    end

    it "should be in-order tarversable" do
	expected = %w{ A B C D E F G H I }
	actual = []
	@tree.inorder do |node|
	    actual << node.key
	end
	expected.should == actual
    end

    it "should be pre-order tarversable" do
	expected = %w{F B A D C E G I H}
	actual = []
	@tree.preorder do |node|
	    actual << node.key
	end
	expected.should == actual
    end

    it "should be post-order tarversable" do
	expected = %w{A C E D B H I G F}
	actual = []
	@tree.postorder do |node|
	    actual << node.key
	end
	expected.should == actual
    end


end
